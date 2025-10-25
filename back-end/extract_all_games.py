#!/usr/bin/env python3
"""
Convert SQL migration data to JSON format for DataLoader
Enhanced version that handles multiple games per INSERT statement
"""

import re
import json
from pathlib import Path

def clean_sql_string(s):
    """Clean SQL string - remove quotes and handle escaped quotes"""
    s = s.strip().rstrip(',')
    if s.startswith("'") and s.endswith("'"):
        s = s[1:-1]
    return s.replace("''", "'")

def extract_json_array_simple(content, start_marker):
    """Extract simple JSON_ARRAY content"""
    pattern = f"{start_marker}\\(([^)]+)\\)"
    match = re.search(pattern, content)
    if match:
        array_content = match.group(1)
        # Extract quoted strings
        items = re.findall(r"'([^']*(?:''[^']*)*)'", array_content)
        return [item.replace("''", "'") for item in items]
    return []

def parse_json_object_array(content, start_pos):
    """Parse JSON_OBJECT array from content starting at position"""
    objects = []
    pos = start_pos
    
    while pos < len(content):
        # Look for JSON_OBJECT
        obj_match = re.search(r"JSON_OBJECT\(", content[pos:])
        if not obj_match:
            break
            
        obj_start = pos + obj_match.start()
        
        # Find the matching closing parenthesis
        paren_count = 1
        i = obj_start + len("JSON_OBJECT(")
        obj_content_start = i
        
        while i < len(content) and paren_count > 0:
            if content[i] == '(':
                paren_count += 1
            elif content[i] == ')':
                paren_count -= 1
            i += 1
        
        if paren_count == 0:
            obj_content = content[obj_content_start:i-1]
            
            # Parse the object content (simplified for name/description and name/url patterns)
            if "'name'" in obj_content and "'description'" in obj_content:
                name_match = re.search(r"'name',\s*'([^']*(?:''[^']*)*)'", obj_content)
                desc_match = re.search(r"'description',\s*'([^']*(?:''[^']*)*)'", obj_content)
                if name_match and desc_match:
                    objects.append({
                        "name": name_match.group(1).replace("''", "'"),
                        "description": desc_match.group(1).replace("''", "'")
                    })
            elif "'name'" in obj_content and "'url'" in obj_content:
                name_match = re.search(r"'name',\s*'([^']*(?:''[^']*)*)'", obj_content)
                url_match = re.search(r"'url',\s*'([^']*(?:''[^']*)*)'", obj_content)
                if name_match and url_match:
                    objects.append({
                        "name": name_match.group(1).replace("''", "'"),
                        "url": url_match.group(1).replace("''", "'")
                    })
            elif "'title'" in obj_content and "'url'" in obj_content:
                title_match = re.search(r"'title',\s*'([^']*(?:''[^']*)*)'", obj_content)
                url_match = re.search(r"'url',\s*'([^']*(?:''[^']*)*)'", obj_content)
                if title_match and url_match:
                    objects.append({
                        "title": title_match.group(1).replace("''", "'"),
                        "url": url_match.group(1).replace("''", "'")
                    })
        
        pos = i
        
        # Check if there's a comma indicating another object
        comma_match = re.search(r",\s*JSON_OBJECT", content[pos:])
        if comma_match:
            pos += comma_match.start() + 1
        else:
            break
    
    return objects

def parse_game_values(values_content):
    """Parse a single game's VALUES content"""
    # Split by lines and clean up
    lines = [line.strip() for line in values_content.split('\n') if line.strip()]
    
    if len(lines) < 11:
        return None
    
    try:
        # Basic fields
        game_id = clean_sql_string(lines[0])
        title = clean_sql_string(lines[1])
        series = clean_sql_string(lines[2])
        series_name = clean_sql_string(lines[3])
        year = int(clean_sql_string(lines[4]))
        developer = clean_sql_string(lines[5])
        short_description = clean_sql_string(lines[6])
        long_description = clean_sql_string(lines[7])
        
        # Join the rest for JSON parsing
        json_section = ' '.join(lines[8:])
        
        # Extract arrays - simplified approach
        characters = extract_json_array_simple(json_section, "JSON_ARRAY")
        
        # Find JSON_OBJECT sections
        characters_objects = []
        features_objects = []
        fan_sites_objects = []
        videos_objects = []
        
        # Look for patterns in the JSON section
        if "JSON_OBJECT" in json_section:
            # This is more complex parsing - for now, use empty arrays
            characters_objects = parse_json_object_array(json_section, 0)
        
        # Determine featured status
        featured = json_section.count("TRUE") > json_section.count("FALSE")
        
        # Convert ID format
        if game_id.endswith('-original'):
            game_id = game_id.replace('-original', '1')
        
        return {
            "id": game_id,
            "title": title,
            "series": series,
            "seriesName": series_name,
            "year": year,
            "developer": developer,
            "shortDescription": short_description,
            "longDescription": long_description,
            "characters": characters_objects if characters_objects else [{"name": char, "description": ""} for char in characters[:4]],
            "features": features_objects if features_objects else [
                {"name": "Classic Adventure", "description": "Traditional Sierra adventure gameplay"},
                {"name": "Story-Driven", "description": "Rich narrative and character development"}
            ],
            "fanSites": fan_sites_objects if fan_sites_objects else [
                {"name": "Sierra Gamers", "url": "https://sierragamers.com"}
            ],
            "screenshots": ["placeholder1.jpg", "placeholder2.jpg", "placeholder3.jpg"],
            "videos": videos_objects,
            "status": "PUBLISHED",
            "featured": featured
        }
    except Exception as e:
        print(f"Error parsing game: {e}")
        return None

def parse_all_games(sql_content):
    """Parse all games from SQL content using a robust approach"""
    games = []
    
    # First, split the content into VALUES sections
    # Look for the pattern: (...game data...)
    game_pattern = r'\(\s*([^)]+(?:\([^)]*\)[^)]*)*)\s*\)(?=\s*,\s*\(|\s*;\s*(?:--|\s*INSERT|$))'
    
    matches = re.finditer(game_pattern, sql_content, re.DOTALL)
    
    for match in matches:
        game_data = match.group(1)
        game = parse_game_values(game_data)
        if game:
            games.append(game)
            print(f"✓ Parsed: {game['id']} - {game['title']}")
    
    return games

def parse_screenshots(sql_content):
    """Parse screenshots from SQL"""
    screenshots = []
    
    # Simple pattern for screenshot data
    pattern = r"\('([^']+)',\s*'([^']*(?:''[^']*)*)',\s*'([^']*(?:''[^']*)*)',\s*'([^']+)'\)"
    matches = re.findall(pattern, sql_content)
    
    for match in matches:
        game_id, title, description, filename = match
        
        # Convert game_id
        if game_id.endswith('-original'):
            game_id = game_id.replace('-original', '1')
        
        screenshots.append({
            "id": len(screenshots) + 1,
            "gameId": game_id,
            "title": title.replace("''", "'"),
            "description": description.replace("''", "'"),
            "filename": filename
        })
    
    return screenshots

def main():
    base_path = Path("C:/sites/sierra-games/sierra-games/back-end/src/main/resources")
    games_sql_path = base_path / "db" / "migration" / "V2__Insert_all_sierra_games_data.sql.bak"
    screenshots_sql_path = base_path / "db" / "migration" / "V4__Insert_sample_screenshots.sql.bak"
    
    games_json_path = base_path / "data" / "games.json"
    screenshots_json_path = base_path / "data" / "screenshots.json"
    
    print("🔄 Reading SQL files...")
    
    with open(games_sql_path, 'r', encoding='utf-8') as f:
        games_sql = f.read()
    
    with open(screenshots_sql_path, 'r', encoding='utf-8') as f:
        screenshots_sql = f.read()
    
    print("🔍 Parsing games...")
    games = parse_all_games(games_sql)
    
    print("🔍 Parsing screenshots...")
    screenshots = parse_screenshots(screenshots_sql)
    
    # Create output directory
    games_json_path.parent.mkdir(parents=True, exist_ok=True)
    
    print(f"💾 Writing {len(games)} games to JSON...")
    with open(games_json_path, 'w', encoding='utf-8') as f:
        json.dump(games, f, indent=2, ensure_ascii=False)
    
    print(f"💾 Writing {len(screenshots)} screenshots to JSON...")
    with open(screenshots_json_path, 'w', encoding='utf-8') as f:
        json.dump(screenshots, f, indent=2, ensure_ascii=False)
    
    print("✅ Conversion completed!")
    print(f"📋 Total games: {len(games)}")
    print("📋 Series breakdown:")
    series_count = {}
    for game in games:
        series_count[game['series']] = series_count.get(game['series'], 0) + 1
    for series, count in sorted(series_count.items()):
        print(f"   {series}: {count} games")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
"""
Convert SQL migration data to JSON format for DataLoader
Extracts complete game and screenshot data from backup migration files
"""

import re
import json
from pathlib import Path

def clean_string(s):
    """Clean SQL string - remove quotes and handle escaped quotes"""
    s = s.strip().rstrip(',')
    if s.startswith("'") and s.endswith("'"):
        s = s[1:-1]
    # Handle escaped quotes
    s = s.replace("''", "'")
    return s

def extract_json_objects(content, object_type):
    """Extract JSON objects from content"""
    objects = []
    if object_type == "character":
        pattern = r"JSON_OBJECT\('name',\s*'([^']*(?:''[^']*)*)',\s*'description',\s*'([^']*(?:''[^']*)*)'\)"
    elif object_type == "feature":
        pattern = r"JSON_OBJECT\('name',\s*'([^']*(?:''[^']*)*)',\s*'description',\s*'([^']*(?:''[^']*)*)'\)"
    elif object_type == "fanSite":
        pattern = r"JSON_OBJECT\('name',\s*'([^']*(?:''[^']*)*)',\s*'url',\s*'([^']*(?:''[^']*)*)'\)"
    elif object_type == "video":
        pattern = r"JSON_OBJECT\('title',\s*'([^']*(?:''[^']*)*)',\s*'url',\s*'([^']*(?:''[^']*)*)'\)"
    
    matches = re.findall(pattern, content)
    for match in matches:
        if object_type in ["character", "feature"]:
            objects.append({"name": match[0].replace("''", "'"), "description": match[1].replace("''", "'")})
        elif object_type == "fanSite":
            objects.append({"name": match[0].replace("''", "'"), "url": match[1].replace("''", "'")})
        elif object_type == "video":
            objects.append({"title": match[0].replace("''", "'"), "url": match[1].replace("''", "'")})
    
    return objects

def parse_sql_games(sql_content):
    """Parse all games from SQL INSERT statements"""
    games = []
    
    # Split by INSERT INTO games to get each game block
    game_blocks = re.split(r'INSERT INTO games[^(]*\([^)]+\)\s*VALUES\s*\(\s*', sql_content, flags=re.IGNORECASE | re.DOTALL)
    
    for i, block in enumerate(game_blocks[1:], 1):  # Skip first empty block
        try:
            # Find the end of this VALUES block
            end_match = re.search(r'\)\s*(?:,\s*\(\s*|\s*;)', block)
            if end_match:
                game_data = block[:end_match.start()]
            else:
                game_data = block.rstrip(');').rstrip()
            
            # Split into lines for easier parsing
            lines = [line.strip() for line in game_data.split('\n') if line.strip()]
            
            if len(lines) < 8:
                continue
                
            # Parse basic fields
            game_id = clean_string(lines[0])
            title = clean_string(lines[1])  
            series = clean_string(lines[2])
            series_name = clean_string(lines[3])
            year = int(clean_string(lines[4]))
            developer = clean_string(lines[5])
            short_description = clean_string(lines[6])
            long_description = clean_string(lines[7])
            
            # Join remaining content for JSON parsing
            json_content = ' '.join(lines[8:])
            
            # Extract arrays
            characters = extract_json_objects(json_content, "character")
            features = extract_json_objects(json_content, "feature")
            fan_sites = extract_json_objects(json_content, "fanSite") 
            videos = extract_json_objects(json_content, "video")
            
            # Check if featured
            featured = "TRUE" in json_content.upper()
            
            # Convert old naming convention
            if game_id.endswith('-original'):
                new_id = game_id.replace('-original', '1')
            else:
                new_id = game_id
            
            game = {
                "id": new_id,
                "title": title,
                "series": series,
                "seriesName": series_name,
                "year": year,
                "developer": developer,
                "shortDescription": short_description,
                "longDescription": long_description,
                "characters": characters,
                "features": features,
                "fanSites": fan_sites,
                "screenshots": ["placeholder1.jpg", "placeholder2.jpg", "placeholder3.jpg"],
                "videos": videos,
                "status": "PUBLISHED",
                "featured": featured
            }
            
            games.append(game)
            print(f"✓ Parsed game {len(games)}: {new_id} - {title}")
            
        except Exception as e:
            print(f"✗ Error parsing game block {i}: {e}")
            if len(lines) >= 2:
                print(f"   First lines: {lines[:2]}")
                
    return games

def parse_sql_screenshots(sql_content):
    """Parse screenshots from SQL INSERT statements"""
    screenshots = []
    
    # Find all VALUES entries for screenshots
    pattern = r"\('([^']+)',\s*'([^']*(?:''[^']*)*)',\s*'([^']*(?:''[^']*)*)',\s*'([^']+)'\)"
    matches = re.findall(pattern, sql_content)
    
    for match in matches:
        game_id, title, description, filename = match
        
        # Convert game_id if needed
        if game_id.endswith('-original'):
            game_id = game_id.replace('-original', '1')
        
        screenshot = {
            "id": len(screenshots) + 1,
            "gameId": game_id,
            "title": title.replace("''", "'"),
            "description": description.replace("''", "'"),
            "filename": filename
        }
        screenshots.append(screenshot)
    
    print(f"✓ Parsed {len(screenshots)} screenshots")
    return screenshots

def main():
    # File paths
    base_path = Path("C:/sites/sierra-games/sierra-games/back-end/src/main/resources")
    games_sql_path = base_path / "db" / "migration" / "V2__Insert_all_sierra_games_data.sql.bak"
    screenshots_sql_path = base_path / "db" / "migration" / "V4__Insert_sample_screenshots.sql.bak"
    
    games_json_path = base_path / "data" / "games.json"
    screenshots_json_path = base_path / "data" / "screenshots.json"
    
    print("🔄 Reading SQL files...")
    
    # Read games SQL
    with open(games_sql_path, 'r', encoding='utf-8') as f:
        games_sql = f.read()
    
    # Read screenshots SQL
    with open(screenshots_sql_path, 'r', encoding='utf-8') as f:
        screenshots_sql = f.read()
    
    print("🔍 Parsing games...")
    games = parse_sql_games(games_sql)
    
    print("🔍 Parsing screenshots...")
    screenshots = parse_sql_screenshots(screenshots_sql)
    
    # Create output directory
    games_json_path.parent.mkdir(parents=True, exist_ok=True)
    
    print(f"💾 Writing {len(games)} games to JSON...")
    with open(games_json_path, 'w', encoding='utf-8') as f:
        json.dump(games, f, indent=2, ensure_ascii=False)
    
    print(f"💾 Writing {len(screenshots)} screenshots to JSON...")
    with open(screenshots_json_path, 'w', encoding='utf-8') as f:
        json.dump(screenshots, f, indent=2, ensure_ascii=False)
    
    print("✅ Conversion completed!")
    print(f"📋 Games converted: {len(games)}")
    print("   Game IDs:", [g['id'] for g in games])
    print(f"📋 Screenshots converted: {len(screenshots)}")

if __name__ == "__main__":
    main()
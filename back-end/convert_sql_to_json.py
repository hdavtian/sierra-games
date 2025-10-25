#!/usr/bin/env python3#!/usr/bin/env python3

""""""

Convert SQL migration data to JSON format for DataLoaderSQL to JSON Converter for Sierra Games Data

Extracts complete game and screenshot data from backup migration files

"""This script helps convert the old SQL migration data to JSON format.

Run this script to extract remaining games from the backup SQL file.

import re

import jsonUsage:

from pathlib import Path    python convert_sql_to_json.py V2__Insert_all_sierra_games_data.sql.bak



def parse_sql_games(sql_content):Output:

    """Parse games from SQL INSERT statements"""    - additional_games.json (games not yet in games.json)

    games = []    - additional_screenshots.json (screenshots not yet in screenshots.json)

    """

    # Split by INSERT statements

    insert_pattern = r"INSERT INTO games.*?VALUES\s*\((.*?)\)(?:,|\s*;)"import json

    matches = re.findall(insert_pattern, sql_content, re.DOTALL | re.IGNORECASE)import re

    import sys

    for match in matches:import os

        # Clean up the match and split by lines

        lines = [line.strip() for line in match.split('\n') if line.strip()]def extract_games_from_sql(sql_file_path):

            """Extract game data from SQL INSERT statements."""

        if len(lines) >= 11:  # Ensure we have all required fields    

            try:    if not os.path.exists(sql_file_path):

                # Parse basic fields (removing quotes)        print(f"Error: File {sql_file_path} not found")

                game_id = lines[0].strip("',")        return [], []

                title = lines[1].strip("',")    

                series = lines[2].strip("',")     with open(sql_file_path, 'r', encoding='utf-8') as f:

                series_name = lines[3].strip("',")        sql_content = f.read()

                year = int(lines[4].strip(","))    

                developer = lines[5].strip("',")    games = []

                short_description = lines[6].strip("',")    screenshots = []

                long_description = lines[7].strip("',")    

                    # Find all INSERT statements for games table

                # Find JSON arrays in the remaining content    game_pattern = r"INSERT INTO games.*?VALUES\s*(.*?);"

                remaining_content = ' '.join(lines[8:])    matches = re.findall(game_pattern, sql_content, re.DOTALL | re.IGNORECASE)

                    

                # Extract JSON_ARRAY content for characters    for match in matches:

                characters_match = re.search(r'JSON_ARRAY\((.*?)\)', remaining_content)        # Parse individual game records

                characters = []        record_pattern = r"\(\s*'([^']+)'.*?\)"

                if characters_match:        records = re.findall(record_pattern, match, re.DOTALL)

                    char_content = characters_match.group(1)        

                    char_objects = re.findall(r"JSON_OBJECT\('name',\s*'([^']+)',\s*'description',\s*'([^']+)'\)", char_content)        for record in records:

                    characters = [{"name": name, "description": desc} for name, desc in char_objects]            # Extract game ID and create placeholder

                            game_id = record

                # Extract features (similar pattern)            games.append({

                features_pattern = r'JSON_ARRAY\((.*?)\).*?JSON_ARRAY'                "id": game_id,

                features_match = re.search(features_pattern, remaining_content)                "title": f"TODO: Extract from SQL for {game_id}",

                features = []                "series": "TODO",

                if features_match:                "seriesName": "TODO", 

                    feat_content = features_match.group(1)                "year": 1980,

                    feat_objects = re.findall(r"JSON_OBJECT\('name',\s*'([^']+)',\s*'description',\s*'([^']+)'\)", feat_content)                "developer": "Sierra On-Line",

                    features = [{"name": name, "description": desc} for name, desc in feat_objects]                "shortDescription": "TODO: Extract from SQL",

                                "longDescription": "TODO: Extract full description from SQL",

                # Extract fan sites                "characters": [],

                fan_sites_pattern = r'JSON_ARRAY\((.*?)\).*?JSON_ARRAY\(.*?\).*?JSON_ARRAY\((.*?)\)'                "features": [],

                fan_sites_match = re.search(fan_sites_pattern, remaining_content)                "fanSites": [],

                fan_sites = []                "screenshots": [],

                if fan_sites_match:                "videos": [],

                    fan_content = fan_sites_match.group(2)                "status": "PUBLISHED",

                    fan_objects = re.findall(r"JSON_OBJECT\('name',\s*'([^']+)',\s*'url',\s*'([^']+)'\)", fan_content)                "featured": False

                    fan_sites = [{"name": name, "url": url} for name, url in fan_objects]            })

                    

                # Extract videos (last JSON_ARRAY)    return games, screenshots

                videos_pattern = r'JSON_ARRAY\((.*?)\)\s*,\s*\'PUBLISHED\''

                videos_match = re.search(videos_pattern, remaining_content)def main():

                videos = []    if len(sys.argv) != 2:

                if videos_match:        print("Usage: python convert_sql_to_json.py <sql_backup_file>")

                    vid_content = videos_match.group(1)        sys.exit(1)

                    vid_objects = re.findall(r"JSON_OBJECT\('title',\s*'([^']+)',\s*'url',\s*'([^']+)'\)", vid_content)    

                    videos = [{"title": title, "url": url} for title, url in vid_objects]    sql_file = sys.argv[1]

                    

                # Check if featured (TRUE/FALSE at end)    print(f"Converting {sql_file} to JSON format...")

                featured = "TRUE" in remaining_content    

                    games, screenshots = extract_games_from_sql(sql_file)

                game = {    

                    "id": game_id,    # Write output files

                    "title": title,    with open('additional_games.json', 'w', encoding='utf-8') as f:

                    "series": series,        json.dump(games, f, indent=2, ensure_ascii=False)

                    "seriesName": series_name,    

                    "year": year,    with open('additional_screenshots.json', 'w', encoding='utf-8') as f:

                    "developer": developer,        json.dump(screenshots, f, indent=2, ensure_ascii=False)

                    "shortDescription": short_description,    

                    "longDescription": long_description,    print(f"Created additional_games.json with {len(games)} games")

                    "characters": characters,    print(f"Created additional_screenshots.json with {len(screenshots)} screenshots")

                    "features": features,    print("\nNext steps:")

                    "fanSites": fan_sites,    print("1. Review and complete the TODO fields in additional_games.json")

                    "screenshots": ["placeholder1.jpg", "placeholder2.jpg", "placeholder3.jpg"],    print("2. Merge with existing games.json")

                    "videos": videos,    print("3. Test with the DatabaseSeeder")

                    "status": "PUBLISHED",

                    "featured": featuredif __name__ == "__main__":

                }    main()
                
                games.append(game)
                print(f"Parsed game: {game_id} - {title}")
                
            except Exception as e:
                print(f"Error parsing game: {e}")
                print(f"Lines: {lines[:5]}")  # Print first few lines for debugging
                
    return games

def parse_sql_screenshots(sql_content):
    """Parse screenshots from SQL INSERT statements"""
    screenshots = []
    
    # Find all VALUES entries
    pattern = r"\('([^']+)',\s*'([^']+)',\s*'([^']+)',\s*'([^']+)'\)"
    matches = re.findall(pattern, sql_content)
    
    for match in matches:
        game_id, title, description, filename = match
        screenshot = {
            "id": len(screenshots) + 1,
            "gameId": game_id,
            "title": title,
            "description": description,
            "filename": filename
        }
        screenshots.append(screenshot)
    
    return screenshots

def main():
    # File paths
    base_path = Path("C:/sites/sierra-games/sierra-games/back-end/src/main/resources")
    games_sql_path = base_path / "db" / "migration" / "V2__Insert_all_sierra_games_data.sql.bak"
    screenshots_sql_path = base_path / "db" / "migration" / "V4__Insert_sample_screenshots.sql.bak"
    
    games_json_path = base_path / "data" / "games.json"
    screenshots_json_path = base_path / "data" / "screenshots.json"
    
    # Read SQL files
    print("Reading SQL files...")
    with open(games_sql_path, 'r', encoding='utf-8') as f:
        games_sql = f.read()
    
    with open(screenshots_sql_path, 'r', encoding='utf-8') as f:
        screenshots_sql = f.read()
    
    # Parse data
    print("Parsing games...")
    games = parse_sql_games(games_sql)
    
    print("Parsing screenshots...")  
    screenshots = parse_sql_screenshots(screenshots_sql)
    
    # Create output directory
    games_json_path.parent.mkdir(parents=True, exist_ok=True)
    
    # Write JSON files
    print(f"Writing {len(games)} games to {games_json_path}")
    with open(games_json_path, 'w', encoding='utf-8') as f:
        json.dump(games, f, indent=2, ensure_ascii=False)
    
    print(f"Writing {len(screenshots)} screenshots to {screenshots_json_path}")
    with open(screenshots_json_path, 'w', encoding='utf-8') as f:
        json.dump(screenshots, f, indent=2, ensure_ascii=False)
    
    print("Conversion completed!")
    print(f"Games: {[g['id'] for g in games]}")
    print(f"Screenshots: {len(screenshots)} total")

if __name__ == "__main__":
    main()
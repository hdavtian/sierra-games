# Game Card Images Directory

This directory contains individual game card images for the games grid and list views.

## Expected Files:

Images should be named exactly after the game's database ID with `.jpg` extension.

### Featured Games (Priority):

- `kq1-original.jpg` - King's Quest I: Quest for the Crown
- `sq1-original.jpg` - Space Quest I: The Sarien Encounter
- `pq1-original.jpg` - Police Quest: In Pursuit of the Death Angel
- `qfg1-original.jpg` - Quest for Glory I: So You Want to Be a Hero
- `lsl1-original.jpg` - Leisure Suit Larry in the Land of the Lounge Lizards
- `goldrush.jpg` - Gold Rush!

### Other King's Quest Games:

- `kq1.jpg` - King's Quest I (regular version)
- `kq2.jpg` - King's Quest II: Romancing the Throne
- `kq3.jpg` - King's Quest III: To Heir Is Human
- `kq4.jpg` - King's Quest IV: The Perils of Rosella
- `kq5.jpg` - King's Quest V: Absence Makes the Heart Go Yonder!
- `kq6.jpg` - King's Quest VI: Heir Today, Gone Tomorrow
- `kq7.jpg` - King's Quest VII: The Princeless Bride
- `kq8.jpg` - King's Quest: Mask of Eternity
- `kq2015.jpg` - King's Quest (2015)

### Other Space Quest Games:

- `sq1.jpg` - Space Quest I (regular version)
- `sq2.jpg` - Space Quest II: Vohaul's Revenge
- `sq3.jpg` - Space Quest III: The Pirates of Pestulon
- `sq4.jpg` - Space Quest IV: Roger Wilco and the Time Rippers
- `sq5.jpg` - Space Quest V: The Next Mutation
- `sq6.jpg` - Space Quest 6: The Spinal Frontier

### Other Police Quest Games:

- `pq1.jpg` - Police Quest I (regular version)
- `pq2.jpg` - Police Quest II: The Vengeance
- `pq3.jpg` - Police Quest III: The Kindred
- `pq4.jpg` - Police Quest: Open Season
- `pqswat.jpg` - Police Quest: SWAT
- `swat2.jpg` - SWAT 2

### Other Quest for Glory Games:

- `qfg1.jpg` - Quest for Glory I (regular version)
- `qfg2.jpg` - Quest for Glory II: Trial by Fire
- `qfg3.jpg` - Quest for Glory III: Wages of War
- `qfg4.jpg` - Quest for Glory: Shadows of Darkness
- `qfg5.jpg` - Quest for Glory V: Dragon Fire

### Other Leisure Suit Larry Games:

- `lsl1.jpg` - Leisure Suit Larry I (regular version)

## Image Specifications:

- **Format**: JPG preferred (PNG also supported)
- **Dimensions**: 400x300 pixels recommended (4:3 aspect ratio)
- **File Size**: Keep under 200KB for optimal loading
- **Content**: Game box art, screenshots, or promotional art

## How It Works:

1. Images are automatically loaded based on the game's database ID
2. If an image doesn't exist, the system falls back to series-colored gradient backgrounds
3. Images use gradient overlays to ensure text readability
4. All images are served from `/images/games/{game-id}.jpg`

## Fallback System:

- Missing image → Series-specific gradient background
- Invalid game ID → Gold gradient (OTHER series default)
- Network error → CSS gradient fallback

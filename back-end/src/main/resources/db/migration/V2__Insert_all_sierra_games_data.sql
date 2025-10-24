-- V2: Insert all Sierra Games data with featured games marked
-- This consolidates the original V2 and V3 migrations into a single comprehensive data set

-- Featured games (one representative game from each major series)
INSERT INTO games (
    id, title, series, series_name, year, developer, short_description, long_description, 
    characters, features, fan_sites, screenshots, videos, status, featured
) VALUES 
(
    'kq1-original',
    'King''s Quest I: Quest for the Crown',
    'KQ',
    'King''s Quest',
    1984,
    'Sierra On-Line',
    'Quest for the Three Treasures and save the kingdom of Daventry in this classic adventure that started it all.',
    'King''s Quest I: Quest for the Crown revolutionized the adventure game genre when it debuted in 1984, establishing Sierra On-Line as the premier creator of graphic adventures. This groundbreaking title introduced players to the enchanted kingdom of Daventry and the brave knight Sir Graham, who would become the central figure of one of gaming''s most beloved franchises.\n\nThe story begins with the aging King Edward of Daventry, who faces a kingdom in decline with no heir to succeed him. In his wisdom, the king devises a test to determine his successor: whoever can retrieve three legendary magical treasures will prove worthy to inherit the crown. Sir Graham, the kingdom''s most noble knight, accepts this monumental quest that will take him across dangerous lands filled with mythical creatures, cunning witches, and treacherous terrain.\n\nThe three treasures Graham must obtain are steeped in legend: the Magic Mirror of Truth, which answers any question with complete honesty and reveals hidden secrets; the Magic Shield of Protection, forged by ancient dwarfs and capable of deflecting any attack; and the Magic Chest of Gold, an enchanted coffer that never empties no matter how much treasure is withdrawn. Each artifact is hidden in a perilous location - the mirror in a dragon''s lair, the shield guarded by a fierce giant, and the chest protected by a cunning leprechaun.\n\nWhat made King''s Quest I truly revolutionary was its seamless blend of colorful 16-color EGA graphics with an innovative text parser interface. Unlike previous text adventures that relied solely on imagination, players could see Graham''s world in vivid detail while still enjoying the creative freedom of typing commands like "climb tree" or "talk to wizard." This approach allowed for unprecedented player expression and multiple solutions to puzzles, encouraging experimentation and creativity.\n\nThe game world is richly populated with characters drawn from fairy tales and folklore: players encounter Little Red Riding Hood delivering goodies to her grandmother, a woodsman who aids travelers in need, a mysterious sorcerer dwelling in an ancient oak tree, and various magical creatures both helpful and hostile. The kingdom of Daventry itself becomes a character, with its lush forests, towering mountains, dangerous swamps, and mysterious caves creating an immersive fantasy realm that feels alive and magical.\n\nBeyond its technical innovations, King''s Quest I established many conventions that would define the adventure game genre for decades. The game featured multiple solutions to puzzles, encouraging players to think creatively and approach problems from different angles. Death was a constant possibility, but rather than frustrating players, these "dead ends" often came with humorous messages that lightened the mood while teaching important lessons about caution and observation.\n\nThe influence of King''s Quest I extends far beyond its original release. It spawned seven sequels and inspired countless other adventure games, proving that there was a massive audience hungry for interactive storytelling combined with beautiful graphics and engaging puzzles. The game''s fairy tale aesthetic and family-friendly content helped establish adventure games as entertainment suitable for all ages, expanding the gaming audience beyond the traditional arcade demographic.\n\nFor modern players, King''s Quest I represents not just a piece of gaming history but a masterclass in world-building and puzzle design. Despite its age, the game''s charm remains intact, offering a glimpse into an era when adventure games prioritized imagination, exploration, and the joy of discovery over action and reflexes.',
    JSON_ARRAY(
        JSON_OBJECT('name', 'Sir Graham', 'description', 'The brave knight protagonist who becomes king'),
        JSON_OBJECT('name', 'King Edward', 'description', 'The aging king of Daventry'),
        JSON_OBJECT('name', 'The Wizard', 'description', 'A mysterious magic user in the forest'),
        JSON_OBJECT('name', 'The Woodsman', 'description', 'A helpful character who aids Graham')
    ),
    JSON_ARRAY(
        JSON_OBJECT('name', 'Text Parser Interface', 'description', 'Type commands to interact with the game world'),
        JSON_OBJECT('name', 'Colorful Graphics', 'description', '16-color EGA graphics that were revolutionary for 1984'),
        JSON_OBJECT('name', 'Fairy Tale Setting', 'description', 'Classic storybook atmosphere with familiar characters'),
        JSON_OBJECT('name', 'Multiple Solutions', 'description', 'Many puzzles have different ways to solve them')
    ),
    JSON_ARRAY(
        JSON_OBJECT('name', 'The King''s Quest Omnipedia', 'url', 'https://kingsquest.fandom.com'),
        JSON_OBJECT('name', 'AGD Interactive', 'url', 'https://www.agdinteractive.com')
    ),
    JSON_ARRAY('placeholder1.jpg', 'placeholder2.jpg', 'placeholder3.jpg'),
    JSON_ARRAY(
        JSON_OBJECT('title', 'King''s Quest I Playthrough', 'url', 'https://youtube.com/watch?v=example1'),
        JSON_OBJECT('title', 'King''s Quest I Review', 'url', 'https://youtube.com/watch?v=example2')
    ),
    'PUBLISHED',
    TRUE
),
(
    'sq1-original',
    'Space Quest I: The Sarien Encounter',
    'SQ',
    'Space Quest',
    1986,
    'Sierra On-Line',
    'Join Roger Wilco, the bumbling space janitor, on his first hilarious adventure to save the galaxy.',
    'Space Quest I: The Sarien Encounter burst onto the adventure gaming scene in 1986 as a brilliant parody that simultaneously celebrated and gently mocked the science fiction genre. Created by the legendary duo Mark Crowe and Scott Murphy, known collectively as the "Two Guys from Andromeda," this game introduced players to Roger Wilco, arguably the most endearingly incompetent hero in gaming history.\n\nThe adventure begins aboard the scientific research vessel Arcada, where Roger works as a lowly space janitor, more concerned with his nap schedule than the ship''s important mission. When the evil Sarien Empire attacks the Arcada to steal the revolutionary Star Generator - a device capable of destroying entire planets - Roger becomes the sole survivor purely by accident, having slept through the initial assault while hidden in a supply closet.\n\nWhat follows is an epic journey of accidental heroism as Roger stumbles from one crisis to another, somehow managing to save the galaxy despite his complete lack of qualifications, training, or common sense. His quest takes him from the dying halls of the Arcada to the harsh desert planet Kerona, where he must survive deadly creatures, ancient ruins, and his own poor decision-making skills.\n\nThe genius of Space Quest I lies in its perfect balance of affectionate parody and genuine adventure gameplay. Every science fiction trope is lovingly lampooned - from Star Trek''s noble exploration ideals to Star Wars'' epic space battles - while still delivering compelling puzzles and an engaging narrative. The game''s humor ranges from subtle wordplay and visual gags to outrageous slapstick, ensuring that players are constantly entertained even as they struggle with challenging puzzles.\n\nRoger''s journey through the alien landscape of Kerona showcases the game''s environmental storytelling at its finest. The desert planet is littered with the remnants of a lost civilization, including mysterious obelisks, underground caverns filled with deadly creatures, and the skeletal remains of previous visitors who weren''t as lucky as our bumbling hero. Each location tells a story through visual details and clever descriptions, creating a rich universe that feels both alien and strangely familiar.\n\nThe game became legendary for its creative death sequences, with Roger meeting his demise in dozens of imaginative and often hilarious ways. Whether being eaten by alien creatures, falling into bottomless pits, or simply forgetting to breathe in hostile environments, these deaths served both as comedy and as teaching moments, encouraging players to think more carefully about their actions while never being truly frustrating.\n\nPerhaps most importantly, Space Quest I established the template for adventure game comedy that would influence the genre for decades. The game proved that humor and adventure could coexist beautifully, that players could laugh at their failures without losing investment in the story, and that parody could enhance rather than diminish the gaming experience.\n\nThe technical achievement of Space Quest I cannot be understated. Running on Sierra''s AGI engine, the game delivered smooth animation, colorful graphics, and responsive controls that brought Roger''s world to life. The game''s sound design, from the ominous hum of alien machinery to the comedic timing of sound effects, added crucial atmosphere that elevated every joke and every moment of tension.\n\nFor players today, Space Quest I represents the birth of comedy adventure gaming and remains a masterpiece of game design that proves great humor is timeless. Roger Wilco''s first adventure continues to entertain new generations of players who discover that sometimes the best heroes are the ones who have no idea what they''re doing.',
    JSON_ARRAY(
        JSON_OBJECT('name', 'Roger Wilco', 'description', 'The bumbling janitor hero of the Space Quest series'),
        JSON_OBJECT('name', 'The Sariens', 'description', 'Evil aliens who steal the Star Generator'),
        JSON_OBJECT('name', 'The Arcada Crew', 'description', 'Roger''s unfortunate crewmates')
    ),
    JSON_ARRAY(
        JSON_OBJECT('name', 'Science Fiction Comedy', 'description', 'Perfect blend of humor and sci-fi adventure'),
        JSON_OBJECT('name', 'Multiple Death Scenarios', 'description', 'Dozens of creative ways for Roger to meet his demise'),
        JSON_OBJECT('name', 'Alien Worlds', 'description', 'Explore strange planets and alien technology'),
        JSON_OBJECT('name', 'Arcade Sequences', 'description', 'Action-based mini-games mixed with adventure')
    ),
    JSON_ARRAY(
        JSON_OBJECT('name', 'Space Quest Omnipedia', 'url', 'https://spacequest.fandom.com'),
        JSON_OBJECT('name', 'The Space Quest Historian', 'url', 'https://www.spacequest.net')
    ),
    JSON_ARRAY('placeholder1.jpg', 'placeholder2.jpg', 'placeholder3.jpg'),
    JSON_ARRAY(
        JSON_OBJECT('title', 'Space Quest I Playthrough', 'url', 'https://youtube.com/watch?v=example1'),
        JSON_OBJECT('title', 'Two Guys from Andromeda Interview', 'url', 'https://youtube.com/watch?v=example2')
    ),
    'PUBLISHED',
    TRUE
),
(
    'pq1-original',
    'Police Quest: In Pursuit of the Death Angel',
    'PQ',
    'Police Quest',
    1987,
    'Sierra On-Line',
    'Experience realistic police work as Officer Sonny Bonds in this groundbreaking procedural adventure.',
    'Police Quest: In Pursuit of the Death Angel marked Sierra On-Line''s bold departure from fantasy and science fiction into the gritty, realistic world of law enforcement. Released in 1987 under the expert guidance of retired California Highway Patrol officer Jim Walls, this groundbreaking adventure game set a new standard for authenticity in interactive entertainment, proving that adventure games could tackle serious, real-world subjects while still providing engaging gameplay.\n\nThe game follows Officer Sonny Bonds, a dedicated member of the Lytton Police Department, as he navigates the complex and dangerous world of modern police work. Beginning with routine patrol duties, players experience the full spectrum of law enforcement, from mundane traffic stops and report writing to high-stakes narcotics investigations and deadly confrontations with armed criminals. Sonny''s journey from street officer to detective provides an authentic look at career progression in law enforcement.\n\nWhat distinguished Police Quest from other adventure games was its unwavering commitment to procedural accuracy. Every aspect of police work, from proper radio protocols and report filing to arrest procedures and evidence handling, was meticulously researched and implemented. Players couldn''t simply click their way through scenarios; they had to demonstrate knowledge of actual police procedures, use proper equipment, and follow department protocols or face realistic consequences including suspension, injury, or death.\n\nThe central narrative revolves around the pursuit of Jesse Bains, a ruthless drug dealer known as the "Death Angel" who has built a criminal empire in Lytton. As Sonny investigates drug-related crimes, he gradually uncovers a complex web of corruption, violence, and addiction that reaches deep into the community. The Death Angel isn''t just a criminal; he''s a symbol of the social decay that dedicated officers like Sonny fight against every day.\n\nJim Walls'' real-world experience permeates every aspect of the game, from the authentic police station atmosphere complete with booking rooms, evidence lockers, and briefing areas, to the realistic portrayal of street-level drug trade with all its associated violence and human tragedy. The game doesn''t glamorize police work; instead, it presents an honest portrayal of the challenges, dangers, and moral complexities that real officers face daily.\n\nThe educational value of Police Quest cannot be overstated. Players learn about proper search and seizure procedures, the importance of backup officers, the dangers of complacency, and the critical nature of following established protocols. The game served as an informal police academy, teaching civilian players about law enforcement while providing current officers with scenarios for discussion and training.\n\nBeyond its educational merits, Police Quest delivers genuine suspense and drama. High-speed chases through city streets, dangerous stakeouts in seedy neighborhoods, and tense confrontations with armed suspects create an atmosphere of constant vigilance and professional responsibility. The game''s portrayal of police work emphasizes that officers must be protectors, investigators, and community servants simultaneously.\n\nThe technical presentation supports the game''s serious tone with detailed graphics that accurately depict police equipment, vehicles, and environments. Every police car, radio, weapon, and piece of safety equipment is rendered with attention to detail that reflects the game''s commitment to authenticity. The interface itself mirrors real police computer systems and documentation requirements.\n\nPerhaps most importantly, Police Quest humanizes law enforcement officers, showing them as dedicated professionals who risk their lives to protect their communities. Through Sonny''s character development, players see the personal cost of police work - the stress, the danger, the impact on family life, and the satisfaction that comes from making a difference.\n\nFor modern players, Police Quest offers a fascinating glimpse into 1980s law enforcement while addressing issues that remain relevant today. The game''s emphasis on proper procedure, ethical behavior, and community protection provides timeless lessons about the importance of professional standards in public service.',
    JSON_ARRAY(
        JSON_OBJECT('name', 'Sonny Bonds', 'description', 'The protagonist police officer working his way up the ranks'),
        JSON_OBJECT('name', 'The Death Angel', 'description', 'The main antagonist, a dangerous drug dealer'),
        JSON_OBJECT('name', 'Marie Wilkins', 'description', 'Sonny''s love interest and fellow police officer'),
        JSON_OBJECT('name', 'Captain Tate', 'description', 'Sonny''s commanding officer')
    ),
    JSON_ARRAY(
        JSON_OBJECT('name', 'Realistic Procedures', 'description', 'Authentic police work and protocol'),
        JSON_OBJECT('name', 'Educational Content', 'description', 'Learn real law enforcement techniques'),
        JSON_OBJECT('name', 'Multiple Scenarios', 'description', 'Traffic stops, investigations, and arrests'),
        JSON_OBJECT('name', 'Consequence System', 'description', 'Proper procedure matters for success')
    ),
    JSON_ARRAY(
        JSON_OBJECT('name', 'Police Quest Central', 'url', 'https://policequest.fandom.com'),
        JSON_OBJECT('name', 'Jim Walls Official Site', 'url', 'https://www.jimwalls.com')
    ),
    JSON_ARRAY('placeholder1.jpg', 'placeholder2.jpg', 'placeholder3.jpg'),
    JSON_ARRAY(
        JSON_OBJECT('title', 'Police Quest Documentary', 'url', 'https://youtube.com/watch?v=example1'),
        JSON_OBJECT('title', 'Jim Walls Interview', 'url', 'https://youtube.com/watch?v=example2')
    ),
    'PUBLISHED',
    TRUE
),
(
    'qfg1-original',
    'Quest for Glory I: So You Want to Be a Hero',
    'QFG',
    'Quest for Glory',
    1989,
    'Sierra On-Line',
    'Begin your heroic journey in this RPG-adventure hybrid that lets you choose your path.',
    'Quest for Glory I: So You Want to Be a Hero stands as one of the most innovative and influential games in adventure gaming history, masterfully blending the narrative depth of traditional adventure games with the character progression and statistical mechanics of role-playing games. Created by the visionary duo Lori Ann Cole and Corey Cole, this 1989 masterpiece established an entirely new subgenre that would inspire countless games while creating one of the most beloved series in all of interactive entertainment.\n\nThe game begins in the picturesque valley of Spielburg, a fairy-tale kingdom trapped under a curse that has transformed it from a prosperous realm into a land plagued by monsters, brigands, and supernatural threats. Players assume the role of a young adventurer seeking to prove their heroism, but unlike traditional adventure games where character abilities are fixed, Quest for Glory allows players to choose their path: Fighter, Magic User, or Thief, each offering dramatically different approaches to challenges and entirely unique gameplay experiences.\n\nAs a Fighter, players rely on strength, sword skills, and martial prowess to overcome obstacles through direct confrontation and physical challenges. The Magic User harnesses arcane forces, learning spells through careful study and practice, solving problems through mystical means and supernatural insight. The Thief employs stealth, agility, and cunning, sneaking past dangers and using specialized skills like lockpicking and climbing to achieve objectives that might be impossible for other character types.\n\nThe genius of Quest for Glory''s design lies in its organic character development system. Rather than gaining experience points through combat alone, players improve their abilities by actually using them. Climbing walls increases climbing skill, casting spells improves magical ability, and fighting monsters enhances combat prowess. This creates an incredibly immersive progression system where character growth feels natural and directly connected to player actions and choices.\n\nThe valley of Spielburg serves as a perfect introduction to this hybrid gameplay, offering a compact but richly detailed world filled with memorable characters, challenging quests, and genuine choices that matter. From the heroic Sheriff who assigns official quests to the mysterious witch Baba Yaga who poses the ultimate challenge, every character has depth, personality, and meaningful connections to the overarching narrative about courage, heroism, and personal growth.\n\nThe day/night cycle adds another layer of complexity and immersion, as different events occur at different times, certain characters are only available during specific hours, and some areas become more or less dangerous as daylight fades. This temporal element encourages players to plan their activities, creates natural pacing, and makes the game world feel alive and dynamic.\n\nWhat truly sets Quest for Glory apart is its philosophical approach to heroism. The game doesn''t simply define heroes as those who win battles or solve puzzles; instead, it presents heroism as a combination of courage, compassion, honor, and justice. Players are rewarded not just for completing quests but for how they complete them - showing mercy to defeated enemies, helping those in need without expectation of reward, and making moral choices even when they''re difficult or costly.\n\nThe character import system that allows players to carry their hero through the entire series was revolutionary for its time and remains impressive today. Decisions made in Spielburg echo through subsequent adventures, creating a truly persistent character development experience that was unprecedented in adventure gaming. Players form genuine emotional connections with their heroes, watching them grow from naive beginners to legendary champions over the course of the complete saga.\n\nThe game''s presentation combines Sierra''s technical excellence with artistic vision that brings the fairy-tale world to life. Every location, from the cozy Guild Hall to the forbidding Brigand Fortress, is rendered with attention to detail that supports both the fantasy atmosphere and the practical gameplay needs. The music, composed by Mark Seibert, perfectly captures the game''s blend of adventure, mystery, and wonder.\n\nBeyond its technical innovations, Quest for Glory I succeeds as interactive storytelling that respects player intelligence and creativity. The game trusts players to discover their own solutions, explore at their own pace, and define their own version of heroism. This respect for player agency, combined with expertly crafted challenges and genuine replay value through different character classes, creates an experience that remains fresh and engaging even after multiple playthroughs.\n\nFor modern players, Quest for Glory I represents the perfect fusion of adventure and RPG genres, demonstrating how seemingly incompatible gameplay styles can enhance each other when combined thoughtfully and skillfully.',
    JSON_ARRAY(
        JSON_OBJECT('name', 'The Hero', 'description', 'The player character seeking to prove their worth'),
        JSON_OBJECT('name', 'The Sheriff', 'description', 'Leader of Spielburg who gives the hero quests'),
        JSON_OBJECT('name', 'Erasmus', 'description', 'A powerful wizard who can teach magic'),
        JSON_OBJECT('name', 'Baba Yaga', 'description', 'The main antagonist, an evil enchantress')
    ),
    JSON_ARRAY(
        JSON_OBJECT('name', 'Character Classes', 'description', 'Choose between Fighter, Magic User, and Thief'),
        JSON_OBJECT('name', 'Skill Development', 'description', 'Practice and improve your abilities over time'),
        JSON_OBJECT('name', 'Multiple Solutions', 'description', 'Different character types can solve problems differently'),
        JSON_OBJECT('name', 'Day/Night Cycle', 'description', 'Time passage affects available actions and encounters')
    ),
    JSON_ARRAY(
        JSON_OBJECT('name', 'Quest for Glory Omnipedia', 'url', 'https://questforglory.fandom.com'),
        JSON_OBJECT('name', 'The QfG Central', 'url', 'https://www.qfgcentral.com')
    ),
    JSON_ARRAY('placeholder1.jpg', 'placeholder2.jpg', 'placeholder3.jpg'),
    JSON_ARRAY(
        JSON_OBJECT('title', 'Quest for Glory I Complete Playthrough', 'url', 'https://youtube.com/watch?v=example1'),
        JSON_OBJECT('title', 'QfG Character Creation Guide', 'url', 'https://youtube.com/watch?v=example2')
    ),
    'PUBLISHED',
    TRUE
);

-- Additional games from each series (not featured)
-- King's Quest Series
INSERT INTO games (
    id, title, series, series_name, year, developer, short_description, long_description, characters, features, fan_sites, screenshots, videos, status, featured
) VALUES
(
    'kq2',
    'King''s Quest II: Romancing the Throne',
    'KQ',
    'King''s Quest',
    1985,
    'Sierra On-Line',
    'King Graham seeks a bride and discovers the beautiful Valanice trapped in an enchanted tower.',
    'King''s Quest II: Romancing the Throne continues King Graham''s story as the newly crowned ruler of Daventry faces the loneliness of royal responsibility and seeks a queen to share his throne. When a magic mirror reveals the beautiful Princess Valanice imprisoned in a crystal tower in the distant land of Kolyma, Graham embarks on a perilous quest that blends romance with classic fairy tale adventure.\n\nThe journey to Kolyma introduces players to a realm under the control of the evil enchantress Hagatha, where familiar fairy tale characters have been twisted into dangerous encounters. Graham must navigate through encounters with Little Red Riding Hood, Grandma, and the Big Bad Wolf, while solving puzzles that require both courage and cleverness.\n\nThis sequel expanded upon the original''s fairy tale foundations while introducing the romantic elements that would become central to the series mythology. The game''s portrayal of Graham''s quest to rescue Valanice established one of adventure gaming''s great love stories, setting up character relationships that would drive the narrative through subsequent sequels.',
    JSON_ARRAY('King Graham', 'Valanice', 'Hagatha', 'Little Red Riding Hood', 'Grandma'),
    JSON_OBJECT('graphics', 'EGA, later VGA remake (1987)', 'interface', 'Text parser with graphics', 'platforms', JSON_ARRAY('IBM PC', 'Apple II', 'Amiga', 'Atari ST'), 'notable_features', JSON_ARRAY('Introduction of Valanice', 'Fairy tale elements', 'AGI engine')),
    JSON_ARRAY('https://kingsquest.wikia.com', 'https://sierragamers.com'),
    JSON_ARRAY(),
    JSON_ARRAY(),
    'PUBLISHED',
    FALSE
),
(
    'kq3',
    'King''s Quest III: To Heir Is Human',
    'KQ',
    'King''s Quest',
    1986,
    'Sierra On-Line',
    'Prince Alexander must escape from the evil wizard Manannan and find his way home to Daventry.',
    'Prince Alexander (Graham''s son who was kidnapped as a baby) must escape from the evil wizard Manannan and find his way home to Daventry to save his family from a three-headed dragon.',
    JSON_ARRAY('Prince Alexander', 'Manannan', 'King Graham', 'Queen Valanice', 'Princess Rosella'),
    JSON_OBJECT('graphics', 'EGA', 'interface', 'Text parser with graphics', 'platforms', JSON_ARRAY('IBM PC', 'Apple II', 'Amiga', 'Atari ST'), 'notable_features', JSON_ARRAY('Play as Graham''s son', 'Magic spell system', 'Time-based gameplay')),
    JSON_ARRAY('https://kingsquest.wikia.com', 'https://sierragamers.com'),
    JSON_ARRAY(),
    JSON_ARRAY(),
    'PUBLISHED',
    FALSE
),
(
    'kq4',
    'King''s Quest IV: The Perils of Rosella',
    'KQ',
    'King''s Quest',
    1988,
    'Sierra On-Line',
    'Princess Rosella must find the magic fruit from the tree of life to save her dying father King Graham.',
    'Princess Rosella must find the magic fruit from the tree of life to save her dying father King Graham. She travels to the land of Tamir where she faces numerous perils.',
    JSON_ARRAY('Princess Rosella', 'King Graham', 'Fairy Godmother', 'Edgar', 'Lolotte'),
    JSON_OBJECT('graphics', 'EGA and SCI VGA versions', 'interface', 'Text parser with graphics, later point-and-click', 'platforms', JSON_ARRAY('IBM PC', 'Amiga', 'Atari ST', 'Apple IIGS'), 'notable_features', JSON_ARRAY('First female protagonist', 'Real-time elements', 'SCI engine debut')),
    JSON_ARRAY('https://kingsquest.wikia.com', 'https://sierragamers.com'),
    JSON_ARRAY(),
    JSON_ARRAY(),
    'PUBLISHED',
    FALSE
),
(
    'kq5',
    'King''s Quest V: Absence Makes the Heart Go Yonder!',
    'KQ',
    'King''s Quest',
    1990,
    'Sierra On-Line',
    'King Graham returns home to find his castle and family have vanished, stolen by the evil wizard Mordack.',
    'King Graham returns home to find his castle and family have vanished, stolen by the evil wizard Mordack. With the help of Cedric the owl, Graham must rescue his family from Mordack''s island.',
    JSON_ARRAY('King Graham', 'Cedric the Owl', 'Mordack', 'Crispin', 'Princess Cassima'),
    JSON_OBJECT('graphics', 'VGA', 'interface', 'Point-and-click', 'platforms', JSON_ARRAY('IBM PC', 'Amiga', 'NES', 'Mac'), 'notable_features', JSON_ARRAY('Full VGA graphics', 'CD-ROM with voice acting', 'Desert sequence')),
    JSON_ARRAY('https://kingsquest.wikia.com', 'https://sierragamers.com'),
    JSON_ARRAY(),
    JSON_ARRAY(),
    'PUBLISHED',
    FALSE
),
(
    'kq6',
    'King''s Quest VI: Heir Today, Gone Tomorrow',
    'KQ',
    'King''s Quest',
    1992,
    'Sierra On-Line',
    'Prince Alexander sails to the Green Isles to find Princess Cassima and ask for her hand in marriage.',
    'Prince Alexander sails to the Green Isles to find Princess Cassima and ask for her hand in marriage, but discovers she is being forced to marry the villainous Vizier Abdul Alhazred.',
    JSON_ARRAY('Prince Alexander', 'Princess Cassima', 'Abdul Alhazred', 'Queen Allaria', 'Caliphim'),
    JSON_OBJECT('graphics', 'VGA', 'interface', 'Point-and-click', 'platforms', JSON_ARRAY('IBM PC', 'Amiga', 'Mac'), 'notable_features', JSON_ARRAY('Arabian Nights theme', 'Multiple solutions', 'Excellent voice acting')),
    JSON_ARRAY('https://kingsquest.wikia.com', 'https://sierragamers.com'),
    JSON_ARRAY(),
    JSON_ARRAY(),
    'PUBLISHED',
    FALSE
),
(
    'kq7',
    'King''s Quest VII: The Princeless Bride',
    'KQ',
    'King''s Quest',
    1994,
    'Sierra On-Line',
    'Queen Valanice and Princess Rosella are transported to the magical realm of Eldritch.',
    'Queen Valanice and Princess Rosella are transported to the magical realm of Eldritch where they become separated. Both must overcome challenges to reunite and return home.',
    JSON_ARRAY('Queen Valanice', 'Princess Rosella', 'Malicia', 'Edgar', 'Troll King'),
    JSON_OBJECT('graphics', 'SVGA with Disney-style animation', 'interface', 'Point-and-click', 'platforms', JSON_ARRAY('IBM PC', 'Mac'), 'notable_features', JSON_ARRAY('Chapter-based structure', 'Cartoon animation style', 'Two protagonists')),
    JSON_ARRAY('https://kingsquest.wikia.com', 'https://sierragamers.com'),
    JSON_ARRAY(),
    JSON_ARRAY(),
    'PUBLISHED',
    FALSE
),
(
    'kq8',
    'King''s Quest: Mask of Eternity',
    'KQ',
    'King''s Quest',
    1998,
    'Sierra On-Line',
    'Connor, a young tanner, becomes the Eternal One chosen to restore the Mask of Eternity.',
    'Connor, a young tanner, becomes the Eternal One chosen to restore the Mask of Eternity after it is shattered by Lucreto, plunging Daventry into stone. Connor must gather the mask pieces to save the kingdom.',
    JSON_ARRAY('Connor', 'Lucreto', 'Archon Pyrus', 'Lord Azriel', 'Sarah'),
    JSON_OBJECT('graphics', '3D graphics', 'interface', 'Real-time 3D action-adventure', 'platforms', JSON_ARRAY('Windows'), 'notable_features', JSON_ARRAY('3D graphics engine', 'Action-oriented gameplay', 'Combat system')),
    JSON_ARRAY('https://kingsquest.wikia.com', 'https://sierragamers.com'),
    JSON_ARRAY(),
    JSON_ARRAY(),
    'PUBLISHED',
    FALSE
),
(
    'kq2015',
    'King''s Quest (2015)',
    'KQ',
    'King''s Quest',
    2015,
    'The Odd Gentlemen',
    'A episodic reboot telling the story of young Graham''s adventures as he becomes a knight and eventually king.',
    'A episodic reboot telling the story of young Graham''s adventures as he becomes a knight and eventually king of Daventry, framed as stories told to his granddaughter.',
    JSON_ARRAY('Young Graham', 'King Edward', 'Valanice', 'Gwendolyn', 'Acorn'),
    JSON_OBJECT('graphics', 'Modern 3D cel-shaded', 'interface', 'Modern adventure game mechanics', 'platforms', JSON_ARRAY('Windows', 'PS3', 'PS4', 'Xbox 360', 'Xbox One'), 'notable_features', JSON_ARRAY('Episodic structure', 'Multiple choice consequences', 'Christopher Lloyd as narrator')),
    JSON_ARRAY('https://kingsquest.wikia.com', 'https://sierragamers.com'),
    JSON_ARRAY(),
    JSON_ARRAY(),
    'PUBLISHED',
    FALSE
);

-- Space Quest Series
INSERT INTO games (
    id, title, series, series_name, year, developer, short_description, long_description, characters, features, fan_sites, screenshots, videos, status, featured
) VALUES
(
    'sq2',
    'Space Quest II: Vohaul''s Revenge',
    'SQ',
    'Space Quest',
    1987,
    'Sierra On-Line',
    'Roger Wilco is captured by Sludge Vohaul, the evil scientist behind the Sarien attack.',
    'Roger Wilco is captured by Sludge Vohaul, the evil scientist behind the Sarien attack. Vohaul plans to unleash insurance salesmen on the planet Xenon as revenge.',
    JSON_ARRAY('Roger Wilco', 'Sludge Vohaul', 'Vohaul''s Goons', 'Labion Terror Beast'),
    JSON_OBJECT('graphics', 'EGA', 'interface', 'Text parser with graphics', 'platforms', JSON_ARRAY('IBM PC', 'Apple II', 'Amiga', 'Atari ST'), 'notable_features', JSON_ARRAY('Vohaul as recurring villain', 'Jungle planet Labion', 'AGI engine')),
    JSON_ARRAY('https://spacequest.net', 'https://sierragamers.com'),
    JSON_ARRAY(),
    JSON_ARRAY(),
    'PUBLISHED',
    FALSE
),
(
    'sq3',
    'Space Quest III: The Pirates of Pestulon',
    'SQ',
    'Space Quest',
    1989,
    'Sierra On-Line',
    'Roger crash-lands on a junk planet and must build a ship to rescue the Two Guys from Andromeda.',
    'Space Quest III: The Pirates of Pestulon finds Roger Wilco stranded on a garbage scow orbiting the junk planet Phleebhut, where he must use his ingenuity and a pile of discarded machinery to build a functional spaceship. The adventure takes a meta-fictional turn when Roger discovers that the Two Guys from Andromeda - the actual creators of the Space Quest series - have been kidnapped by the evil software company ScumSoft and forced to design mind-numbing computer games.\n\nThis installment perfected the series'' blend of science fiction adventure and software industry satire, featuring memorable sequences including the transformation of Roger into various arcade game scenarios and confrontations with corporate villains who represent the worst aspects of commercial game development. The game''s self-referential humor and industry commentary made it a favorite among both players and game developers, establishing Space Quest as adventure gaming''s premier comedy franchise.',
    JSON_ARRAY('Roger Wilco', 'Two Guys from Andromeda', 'ScumSoft Pirates', 'Arnoid the Terminator'),
    JSON_OBJECT('graphics', 'EGA', 'interface', 'Text parser with graphics', 'platforms', JSON_ARRAY('IBM PC', 'Amiga', 'Atari ST'), 'notable_features', JSON_ARRAY('Meta-humor about game development', 'Arcade sequences', 'SCI engine')),
    JSON_ARRAY('https://spacequest.net', 'https://sierragamers.com'),
    JSON_ARRAY(),
    JSON_ARRAY(),
    'PUBLISHED',
    FALSE
),
(
    'sq4',
    'Space Quest IV: Roger Wilco and the Time Rippers',
    'SQ',
    'Space Quest',
    1991,
    'Sierra On-Line',
    'Sludge Vohaul travels back in time to prevent Roger from ever being born.',
    'Sludge Vohaul travels back in time to prevent Roger from ever being born. Roger must chase him through time, visiting his own past and future adventures.',
    JSON_ARRAY('Roger Wilco', 'Sludge Vohaul', 'Son of Roger', 'Time Police', 'Sequel Policeman'),
    JSON_OBJECT('graphics', 'VGA', 'interface', 'Point-and-click', 'platforms', JSON_ARRAY('IBM PC', 'Amiga'), 'notable_features', JSON_ARRAY('Time travel to other SQ games', 'CD-ROM with voice', 'SCI engine')),
    JSON_ARRAY('https://spacequest.net', 'https://sierragamers.com'),
    JSON_ARRAY(),
    JSON_ARRAY(),
    'PUBLISHED',
    FALSE
),
(
    'sq5',
    'Space Quest V: The Next Mutation',
    'SQ',
    'Space Quest',
    1993,
    'Sierra On-Line',
    'Captain Roger Wilco of StarCon Academy must graduate and command his own ship.',
    'Captain Roger Wilco of StarCon Academy must graduate and command his own ship while facing a conspiracy involving his nemesis Captain Quirk and mysterious mutations.',
    JSON_ARRAY('Captain Roger Wilco', 'Captain Quirk', 'Beatrice Wankmeister', 'Ambassador Worf', 'Cliffy'),
    JSON_OBJECT('graphics', 'VGA', 'interface', 'Point-and-click', 'platforms', JSON_ARRAY('IBM PC'), 'notable_features', JSON_ARRAY('Star Trek parody', 'Ship command sequences', 'Multiple crew members')),
    JSON_ARRAY('https://spacequest.net', 'https://sierragamers.com'),
    JSON_ARRAY(),
    JSON_ARRAY(),
    'PUBLISHED',
    FALSE
),
(
    'sq6',
    'Space Quest 6: The Spinal Frontier',
    'SQ',
    'Space Quest',
    1995,
    'Sierra On-Line',
    'Roger is shrunk to microscopic size and injected into the body of his commanding officer.',
    'Roger is shrunk to microscopic size and injected into the body of his commanding officer to fight a deadly virus. The final game in the original series.',
    JSON_ARRAY('Roger Wilco', 'Stellar Santiago', 'Sharpei', 'Dr. Beleauxs', 'Corpsman Weevil'),
    JSON_OBJECT('graphics', 'SVGA', 'interface', 'Point-and-click', 'platforms', JSON_ARRAY('Windows', 'DOS'), 'notable_features', JSON_ARRAY('Fantastic Voyage premise', 'Body exploration', 'Final original game')),
    JSON_ARRAY('https://spacequest.net', 'https://sierragamers.com'),
    JSON_ARRAY(),
    JSON_ARRAY(),
    'PUBLISHED',
    FALSE
);

-- Police Quest Series
INSERT INTO games (
    id, title, series, series_name, year, developer, short_description, long_description, characters, features, fan_sites, screenshots, videos, status, featured
) VALUES
(
    'pq2',
    'Police Quest II: The Vengeance',
    'PQ',
    'Police Quest',
    1988,
    'Sierra On-Line',
    'Detective Sonny Bonds faces revenge from Jessie Bains (the Death Angel) who has escaped from prison.',
    'Detective Sonny Bonds faces revenge from Jessie Bains (the Death Angel) who has escaped from prison and is targeting Sonny and everyone he cares about.',
    JSON_ARRAY('Sonny Bonds', 'Marie Bonds', 'Jessie Bains', 'Keith Smiths', 'Captain Tate'),
    JSON_OBJECT('graphics', 'EGA, later VGA remake', 'interface', 'Text parser with graphics', 'platforms', JSON_ARRAY('IBM PC', 'Amiga', 'Atari ST'), 'notable_features', JSON_ARRAY('Personal revenge story', 'Multiple locations', 'AGI engine')),
    JSON_ARRAY('https://policequest.net', 'https://sierragamers.com'),
    JSON_ARRAY(),
    JSON_ARRAY(),
    'PUBLISHED',
    FALSE
),
(
    'pq3',
    'Police Quest III: The Kindred',
    'PQ',
    'Police Quest',
    1991,
    'Sierra On-Line',
    'Sergeant Sonny Bonds investigates a series of murders that lead to a satanic cult called The Kindred.',
    'Sergeant Sonny Bonds investigates a series of murders that lead to a satanic cult called The Kindred. His personal life is complicated by his relationship with Marie.',
    JSON_ARRAY('Sonny Bonds', 'Marie Bonds', 'The Kindred Cult', 'Michael Aspen', 'Pat Morales'),
    JSON_OBJECT('graphics', 'VGA', 'interface', 'Point-and-click', 'platforms', JSON_ARRAY('IBM PC', 'Amiga'), 'notable_features', JSON_ARRAY('Occult themes', 'Final Jim Walls game', 'SCI engine')),
    JSON_ARRAY('https://policequest.net', 'https://sierragamers.com'),
    JSON_ARRAY(),
    JSON_ARRAY(),
    'PUBLISHED',
    FALSE
),
(
    'pq4',
    'Police Quest: Open Season',
    'PQ',
    'Police Quest',
    1993,
    'Sierra On-Line',
    'Detective John Carey investigates a series of brutal murders in Los Angeles.',
    'Detective John Carey investigates a series of brutal murders in Los Angeles. This marked a departure from the Sonny Bonds storyline with new characters and grittier realism.',
    JSON_ARRAY('John Carey', 'Laura Watts', 'Colby', 'Ricardo Garza', 'Captain Getty'),
    JSON_OBJECT('graphics', 'VGA', 'interface', 'Point-and-click', 'platforms', JSON_ARRAY('IBM PC'), 'notable_features', JSON_ARRAY('Daryl Gates involvement', 'LA setting', 'Grittier tone')),
    JSON_ARRAY('https://policequest.net', 'https://sierragamers.com'),
    JSON_ARRAY(),
    JSON_ARRAY(),
    'PUBLISHED',
    FALSE
),
(
    'pqswat',
    'Police Quest: SWAT',
    'PQ',
    'Police Quest',
    1995,
    'Sierra On-Line',
    'A realistic SWAT team simulator where players must complete various tactical missions.',
    'A realistic SWAT team simulator where players must complete various tactical missions including hostage rescue, drug raids, and counter-terrorism operations.',
    JSON_ARRAY('SWAT Team Members', 'Various Suspects', 'Hostages', 'Team Leaders'),
    JSON_OBJECT('graphics', 'VGA with FMV', 'interface', 'Tactical simulation', 'platforms', JSON_ARRAY('Windows', 'DOS'), 'notable_features', JSON_ARRAY('Live-action video', 'SWAT training simulation', 'Multiple scenarios')),
    JSON_ARRAY('https://policequest.net', 'https://sierragamers.com'),
    JSON_ARRAY(),
    JSON_ARRAY(),
    'PUBLISHED',
    FALSE
),
(
    'swat2',
    'SWAT 2',
    'PQ',
    'Police Quest',
    1998,
    'Sierra On-Line',
    'An isometric tactical strategy game where players command a SWAT team through various hostage and terrorist situations.',
    'An isometric tactical strategy game where players command a SWAT team through various hostage and terrorist situations with enhanced realism and strategic depth.',
    JSON_ARRAY('SWAT Team Commander', 'Team Members', 'Terrorists', 'Hostages', 'Negotiator'),
    JSON_OBJECT('graphics', 'Isometric 2D', 'interface', 'Real-time tactical strategy', 'platforms', JSON_ARRAY('Windows'), 'notable_features', JSON_ARRAY('Isometric view', 'Real-time strategy elements', 'Team management')),
    JSON_ARRAY('https://policequest.net', 'https://sierragamers.com'),
    JSON_ARRAY(),
    JSON_ARRAY(),
    'PUBLISHED',
    FALSE
);

-- Quest for Glory Series
INSERT INTO games (
    id, title, series, series_name, year, developer, short_description, long_description, characters, features, fan_sites, screenshots, videos, status, featured
) VALUES
(
    'qfg2',
    'Quest for Glory II: Trial by Fire',
    'QFG',
    'Quest for Glory',
    1990,
    'Sierra On-Line',
    'The Hero travels to the desert city of Shapeir where magical elementals threaten the land.',
    'The Hero travels to the desert city of Shapeir where magical elementals threaten the land. The hero must prove worthy to become Prince of Shapeir and save the sister city of Raseir.',
    JSON_ARRAY('The Hero', 'Rakeesh', 'Uhura', 'Abdulla Doo', 'Emir Arus al-Din'),
    JSON_OBJECT('graphics', 'EGA', 'interface', 'Text parser with graphics', 'platforms', JSON_ARRAY('IBM PC'), 'notable_features', JSON_ARRAY('Arabian Nights theme', 'Character import system', 'Day/night cycle')),
    JSON_ARRAY('https://questforglory.com', 'https://sierragamers.com'),
    JSON_ARRAY(),
    JSON_ARRAY(),
    'PUBLISHED',
    FALSE
),
(
    'qfg3',
    'Quest for Glory III: Wages of War',
    'QFG',
    'Quest for Glory',
    1992,
    'Sierra On-Line',
    'The Hero journeys to the African-inspired land of Fricana where the Simbani and Leopard tribes are on the brink of war.',
    'The Hero journeys to the African-inspired land of Fricana where the Simbani and Leopard tribes are on the brink of war. The hero must prevent conflict and face an ancient demon.',
    JSON_ARRAY('The Hero', 'Rakeesh', 'Uhura', 'Simba', 'Demon Wizard'),
    JSON_OBJECT('graphics', 'VGA', 'interface', 'Point-and-click', 'platforms', JSON_ARRAY('IBM PC', 'Amiga'), 'notable_features', JSON_ARRAY('African mythology theme', 'Diplomacy elements', 'War prevention')),
    JSON_ARRAY('https://questforglory.com', 'https://sierragamers.com'),
    JSON_ARRAY(),
    JSON_ARRAY(),
    'PUBLISHED',
    FALSE
),
(
    'qfg4',
    'Quest for Glory: Shadows of Darkness',
    'QFG',
    'Quest for Glory',
    1993,
    'Sierra On-Line',
    'The Hero is transported to the dark land of Mordavia (Transylvania) where undead creatures roam.',
    'The Hero is transported to the dark land of Mordavia (Transylvania) where undead creatures roam and an ancient evil seeks to bring eternal darkness to the world.',
    JSON_ARRAY('The Hero', 'Katrina', 'Dr. Cranium', 'Tanya', 'Dark One'),
    JSON_OBJECT('graphics', 'VGA with CD-ROM voice', 'interface', 'Point-and-click', 'platforms', JSON_ARRAY('IBM PC'), 'notable_features', JSON_ARRAY('Horror theme', 'Slavic folklore', 'Character relationships')),
    JSON_ARRAY('https://questforglory.com', 'https://sierragamers.com'),
    JSON_ARRAY(),
    JSON_ARRAY(),
    'PUBLISHED',
    FALSE
),
(
    'qfg5',
    'Quest for Glory V: Dragon Fire',
    'QFG',
    'Quest for Glory',
    1998,
    'Sierra On-Line',
    'The Hero enters the Rites of Rulership in the Greek-inspired kingdom of Silmaria to become king.',
    'The Hero enters the Rites of Rulership in the Greek-inspired kingdom of Silmaria to become king. The final game brings together characters from throughout the series for an epic conclusion.',
    JSON_ARRAY('The Hero', 'Elsa von Spielburg', 'Erasmus', 'Katrina', 'Dragon of Doom'),
    JSON_OBJECT('graphics', 'SVGA with 3D elements', 'interface', 'Point-and-click with action RPG combat', 'platforms', JSON_ARRAY('Windows'), 'notable_features', JSON_ARRAY('Greek mythology theme', 'Series conclusion', 'Marriage and kingship')),
    JSON_ARRAY('https://questforglory.com', 'https://sierragamers.com'),
    JSON_ARRAY(),
    JSON_ARRAY(),
    'PUBLISHED',
    FALSE
);

-- Other Notable Games
INSERT INTO games (
    id, title, series, series_name, year, developer, short_description, long_description, characters, features, fan_sites, screenshots, videos, status, featured
) VALUES
(
    'lsl1-original',
    'Leisure Suit Larry in the Land of the Lounge Lizards',
    'LSL',
    'Leisure Suit Larry',
    1987,
    'Sierra On-Line',
    'Follow Larry Laffer on his quest for love in this adult-oriented comedy adventure.',
    'Leisure Suit Larry in the Land of the Lounge Lizards represents one of the most audacious and controversial entries in Sierra On-Line''s catalog, boldly venturing into adult-oriented comedy adventure gaming with a character so endearingly pathetic that he became an unlikely icon of 1980s gaming culture. Created by Al Lowe and released in 1987, this game introduced players to Larry Laffer, a 40-year-old balding, overweight loser whose desperate quest for romance in the neon-soaked city of Lost Wages would become the stuff of gaming legend.\n\nLarry Laffer is adventure gaming''s ultimate antihero: a middle-aged man still living with his mother, working a dead-end job, and possessing absolutely no social skills or self-awareness. Dressed in his signature white polyester leisure suit - a fashion choice that was already laughably outdated by the 1980s - Larry embarks on a quest to lose his virginity and find true love, armed with nothing but misplaced confidence, pickup lines from the 1970s, and an wallet containing his life savings of $94.\n\nThe fictional city of Lost Wages serves as the perfect backdrop for Larry''s misadventures, a thinly veiled parody of Las Vegas that exaggerates every seedy, artificial, and desperate aspect of Sin City culture. From sleazy nightclubs and cheap casinos to adult bookstores and wedding chapels, every location reinforces the game''s themes of artificial glamour masking genuine loneliness and desperation.\n\nWhat made Leisure Suit Larry revolutionary wasn''t just its mature content, but its sophisticated approach to adult humor. Rather than relying on explicit material, the game employed clever wordplay, visual innuendo, and situational comedy that was often more suggestive than explicit. The humor worked on multiple levels - players could laugh at Larry''s incompetence while also recognizing uncomfortable truths about dating culture, male insecurity, and the artificial nature of modern romance.\n\nThe game''s famous age verification system, which required players to answer trivia questions about American culture from the 1960s and 1970s, served multiple purposes beyond simple age gating. These questions created a generational barrier that ensured the game''s cultural references would resonate with its intended audience while also serving as the first indication that this wasn''t going to be a typical Sierra adventure.\n\nLarry''s interactions with the various women he encounters reveal the game''s surprisingly sophisticated commentary on gender relations and social expectations. Each potential romantic interest represents a different archetype - the materialistic gold-digger, the naive small-town girl, the sophisticated intellectual, the dangerous femme fatale - and Larry''s inevitable failures with each reveal both his own shortcomings and broader cultural attitudes about relationships, sexuality, and personal worth.\n\nThe gameplay itself follows traditional Sierra adventure conventions but with a distinctly adult twist. Puzzles often involve navigating social situations, understanding adult relationships, and dealing with the consequences of poor judgment. The game''s multiple death scenarios are particularly creative, often resulting from Larry''s own stupidity or social ineptitude rather than traditional adventure game dangers.\n\nAl Lowe''s background as a professional musician and music teacher brought a unique sensibility to the game''s design, evident in everything from the jazzy soundtrack that perfectly captures the seedy lounge atmosphere to the careful timing of comedic moments. The game''s pacing mirrors that of a well-constructed comedy routine, building tension through Larry''s increasingly desperate attempts at romance before delivering perfectly timed punchlines through his inevitable failures.\n\nBeyond its shock value and comedy, Leisure Suit Larry succeeded as social commentary, holding up a funhouse mirror to American dating culture and revealing the loneliness and desperation that often lurks beneath surface sophistication. Larry''s character, while exaggerated for comedic effect, touched on real anxieties about aging, loneliness, and social acceptance that resonated with players regardless of their own romantic experience.\n\nThe game''s technical presentation perfectly supported its thematic content, with detailed pixel art that brought Lost Wages to life in all its gaudy, artificial glory. Every location, from the disco''s flashing lights to the casino''s cheap glamour, reinforced the game''s themes while providing the visual comedy that enhanced every joke and awkward situation.\n\nLeisure Suit Larry''s cultural impact extended far beyond gaming, inspiring discussions about mature content in interactive entertainment, the role of comedy in addressing adult themes, and the potential for adventure games to tackle subjects beyond traditional fantasy and science fiction. The character became a cultural touchstone for discussions about male insecurity, middle-age crisis, and the artificial nature of modern romance.\n\nFor contemporary players, Leisure Suit Larry offers a fascinating glimpse into 1980s culture while delivering comedy that, despite its dated references, remains surprisingly relevant in its observations about human nature, social expectations, and the eternal quest for connection in an increasingly artificial world.',
    JSON_ARRAY(
        JSON_OBJECT('name', 'Larry Laffer', 'description', 'The protagonist, a hapless man searching for love'),
        JSON_OBJECT('name', 'Fawn', 'description', 'A woman Larry encounters in his adventures'),
        JSON_OBJECT('name', 'The Pimp', 'description', 'A dangerous character Larry must deal with'),
        JSON_OBJECT('name', 'Various Women', 'description', 'Larry''s potential romantic interests')
    ),
    JSON_ARRAY(
        JSON_OBJECT('name', 'Adult Humor', 'description', 'Mature themes and innuendo-laden comedy'),
        JSON_OBJECT('name', 'Urban Setting', 'description', 'Explore the seedy underbelly of Lost Wages'),
        JSON_OBJECT('name', 'Age Verification', 'description', 'Trivia questions to verify player age'),
        JSON_OBJECT('name', 'Multiple Endings', 'description', 'Different outcomes based on player choices')
    ),
    JSON_ARRAY(
        JSON_OBJECT('name', 'Larry Laffer''s Home Page', 'url', 'https://www.larryland.com'),
        JSON_OBJECT('name', 'Al Lowe''s Humor Site', 'url', 'https://www.allowe.com')
    ),
    JSON_ARRAY('placeholder1.jpg', 'placeholder2.jpg', 'placeholder3.jpg'),
    JSON_ARRAY(
        JSON_OBJECT('title', 'Leisure Suit Larry Retrospective', 'url', 'https://youtube.com/watch?v=example1'),
        JSON_OBJECT('title', 'Al Lowe Interview', 'url', 'https://youtube.com/watch?v=example2')
    ),
    'PUBLISHED',
    TRUE
),
(
    'goldrush',
    'Gold Rush!',
    'OTHER',
    'Other Games',
    1988,
    'Sierra On-Line',
    'Travel to California during the 1849 Gold Rush in this historical adventure.',
    'Gold Rush! stands as Sierra On-Line''s most ambitious attempt to create historically authentic interactive entertainment, transforming one of America''s most dramatic and transformative periods into an engaging adventure game that serves as both thrilling entertainment and genuine historical education. Released in 1988 under the direction of Doug and Ken MacNeill, this remarkable game captures the excitement, danger, and human drama of the California Gold Rush of 1849 with unprecedented attention to historical detail and cultural authenticity.\n\nThe adventure begins in Brooklyn, New York, where players assume the role of Jerrod Wilson, a newspaper reporter whose comfortable but mundane life is suddenly disrupted by electrifying news from the West: gold has been discovered in California, and fortune awaits those brave enough to seek it. Like thousands of real "49ers," Jerrod must decide whether to abandon everything familiar for the uncertain promise of wealth in a distant, dangerous land.\n\nWhat makes Gold Rush! truly exceptional is its commitment to historical accuracy in every aspect of the journey west. Players must choose between three authentic routes to California, each based on actual paths taken by real gold seekers, and each offering dramatically different challenges, costs, and experiences that reflect the genuine choices faced by hopeful prospectors in 1849.\n\nThe Cape Horn route involves booking passage on a ship that sails around the treacherous southern tip of South America, a journey that could take six months or more depending on weather conditions and the skill of the captain. This route was expensive but relatively safe, though passengers had to endure seasickness, storms, and the psychological challenges of months at sea. The game accurately portrays the shipboard experience, from the cramped quarters and limited food to the camaraderie that developed among passengers sharing this epic journey.\n\nThe Panama route represents a compromise between cost and speed, involving ship travel to Panama followed by a dangerous overland trek across the disease-ridden isthmus to catch another ship on the Pacific side. This path exposed travelers to tropical diseases, bandits, and the infamous "Panama fever," while also offering opportunities to experience the exotic Central American environment that few Americans of the era had ever seen.\n\nThe overland wagon train route, while the least expensive, presented the greatest challenges and dangers. Players experience the authentic hardships of crossing the American continent: river crossings that could destroy wagons and drown livestock, desert stretches where water became more valuable than gold, mountain passes that claimed lives and equipment, and the constant threat of accidents, disease, and conflicts with Native American tribes defending their ancestral lands.\n\nEach route is meticulously researched and presents historically accurate challenges, from the specific diseases that plagued travelers to the actual costs of supplies and transportation. The game doesn''t romanticize these journeys; instead, it presents an honest portrayal of the extreme hardships that real people endured in pursuit of their California dreams.\n\nUpon reaching California, players discover that finding gold is only the beginning of their challenges. The game accurately depicts the harsh realities of mining life: the backbreaking physical labor of placer mining, the complex social dynamics of mining camps, the inflated prices charged by merchants who often profited more than the miners themselves, and the environmental destruction caused by hydraulic mining techniques.\n\nThe California section of the game introduces players to the complex multicultural society that emerged during the Gold Rush, including Mexican Californios whose land was often seized by American miners, Chinese immigrants who faced severe discrimination while contributing essential labor and skills, and Native Americans whose traditional ways of life were devastated by the mining invasion. These interactions, while necessarily simplified for gameplay purposes, reflect the real cultural conflicts and adaptations that shaped California''s development.\n\nGold Rush! excels in its portrayal of economic realities that many prospectors discovered too late. The game teaches players about claim jumping, the importance of proper equipment and supplies, the role of luck versus skill in mining success, and the economic boom-and-bust cycles that characterized mining towns. Many players discover, as did many real 49ers, that steady income could often be made by providing services to miners rather than mining gold directly.\n\nThe game''s educational value extends beyond historical facts to include lessons about resource management, risk assessment, and the human cost of rapid economic and social change. Players learn about the environmental impact of mining, the social tensions created by rapid population growth, and the ways in which the Gold Rush transformed not just California but the entire United States.\n\nTechnically, Gold Rush! showcases Sierra''s commitment to bringing historical environments to life through detailed graphics that accurately depict everything from period clothing and architecture to mining equipment and transportation methods. The game''s visual presentation is thoroughly researched, with authentic details that help immerse players in the 1849 experience.\n\nPerhaps most importantly, Gold Rush! succeeds in humanizing historical events by allowing players to experience the hopes, fears, and challenges that drove real people to abandon everything they knew in pursuit of an uncertain dream. Through Jerrod Wilson''s journey, players gain genuine insight into the motivations, hardships, and ultimate consequences of one of America''s most dramatic mass migrations.\n\nFor modern players, Gold Rush! offers a unique opportunity to experience American history through interactive participation rather than passive observation, creating understanding and empathy for the human experiences that shaped the American West while delivering engaging adventure gameplay that remains compelling decades after its original release.',
    JSON_ARRAY(
        JSON_OBJECT('name', 'Jerrod Wilson', 'description', 'The protagonist, a newspaper reporter seeking gold'),
        JSON_OBJECT('name', 'Historical Figures', 'description', 'Real people from the Gold Rush era'),
        JSON_OBJECT('name', 'Fellow Miners', 'description', 'Other prospectors trying to strike it rich'),
        JSON_OBJECT('name', 'Merchants', 'description', 'Traders selling supplies to miners')
    ),
    JSON_ARRAY(
        JSON_OBJECT('name', 'Historical Accuracy', 'description', 'Based on real events and people from 1849'),
        JSON_OBJECT('name', 'Multiple Routes', 'description', 'Three different ways to reach California'),
        JSON_OBJECT('name', 'Educational Content', 'description', 'Learn about the Gold Rush period'),
        JSON_OBJECT('name', 'Economic Simulation', 'description', 'Manage money and supplies realistically')
    ),
    JSON_ARRAY(
        JSON_OBJECT('name', 'Gold Rush History', 'url', 'https://www.goldrushhistory.com'),
        JSON_OBJECT('name', 'Sierra Adventure Games', 'url', 'https://www.sierragames.com')
    ),
    JSON_ARRAY('placeholder1.jpg', 'placeholder2.jpg', 'placeholder3.jpg'),
    JSON_ARRAY(
        JSON_OBJECT('title', 'Gold Rush! Historical Documentary', 'url', 'https://youtube.com/watch?v=example1'),
        JSON_OBJECT('title', 'Gold Rush! Gameplay', 'url', 'https://youtube.com/watch?v=example2')
    ),
    'PUBLISHED',
    TRUE
);
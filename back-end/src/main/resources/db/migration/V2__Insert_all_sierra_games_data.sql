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
    'King''s Quest I: Quest for the Crown was the first game in the legendary King''s Quest series. Players control Sir Graham, a brave knight tasked by King Edward to find three magical treasures that will allow Graham to become the next king of Daventry.\n\nThis groundbreaking adventure game introduced many players to the world of graphic adventures, featuring colorful 16-color graphics and a text parser interface that allowed for creative problem-solving. The game is filled with fairy tale references, challenging puzzles, and memorable characters.\n\nThe three treasures Graham must find are: the Magic Mirror that answers any question truthfully, the Magic Shield that protects its bearer from harm, and the Magic Chest that is always filled with gold. Each treasure is hidden in a dangerous location and guarded by formidable enemies.',
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
    'Space Quest I: The Sarien Encounter introduced the world to Roger Wilco, the most unlikely hero in adventure gaming. As a lowly janitor aboard the scientific vessel Arcada, Roger must save the galaxy when evil Sariens attack his ship and steal the experimental Star Generator.\n\nThis game marked the beginning of the "Two Guys from Andromeda" (Mark Crowe and Scott Murphy) collaboration, bringing their unique brand of science fiction humor to the adventure game genre. The game perfectly balances comedy with genuine adventure gameplay, creating an experience that''s both funny and engaging.\n\nPlayers guide Roger through various alien worlds, from the desert planet Kerona to the Sarien ship Deltaur. The game is notorious for its numerous ways to die, often in hilariously absurd circumstances, which became a hallmark of the series.',
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
    'Police Quest: In Pursuit of the Death Angel was Sierra''s first foray into realistic crime-fighting adventures. Designed by former California Highway Patrol officer Jim Walls, the game emphasized proper police procedures and realistic law enforcement scenarios.\n\nPlayers control Officer Sonny Bonds as he works his way up from traffic duty to detective, ultimately pursuing the dangerous drug dealer known as the Death Angel. The game was notable for its attention to detail in police work, requiring players to follow proper procedures or face consequences.\n\nThe game covered various aspects of police work, from routine traffic stops to high-stakes drug busts, always emphasizing the importance of following protocol and the law.',
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
    'Quest for Glory I: So You Want to Be a Hero was a revolutionary game that combined traditional adventure gaming with RPG elements. Players could choose to be a Fighter, Magic User, or Thief, each with different solutions to puzzles and different storylines.\n\nSet in the valley of Spielburg, players must prove their heroism by completing various quests and ultimately defeating the evil enchantress Baba Yaga. The game featured a day/night cycle, character statistics that could be improved through practice, and multiple ways to solve most problems.\n\nThis was the first game in what would become a beloved series, allowing players to import their characters into subsequent games, making their choices and character development carry forward through the entire saga.',
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
    'King Graham seeks a bride and discovers the beautiful Valanice trapped in an enchanted tower. He must journey to the land of Kolyma to rescue her from the evil enchantress Hagatha.',
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
    'Roger crash-lands on a junk planet and must build a ship to rescue the Two Guys from Andromeda (the game''s creators) who have been kidnapped by software pirates.',
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
    'Leisure Suit Larry in the Land of the Lounge Lizards was Sierra''s entry into adult-oriented adventure gaming. Players control Larry Laffer, a 40-year-old virgin in a white polyester suit, as he attempts to find romance in the fictional city of Lost Wages.\n\nThe game was notable for its mature themes and humor, requiring players to verify their age through a series of trivia questions before playing. Despite its adult content, the game was more comedy than anything explicit, relying on innuendo and absurd situations for its humor.\n\nLarry''s adventures take him through various locations including discos, casinos, and bars, as he attempts to woo different women with varying degrees of success. The game spawned a long-running series and became a cult classic.',
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
    'Gold Rush! was Sierra''s attempt at creating a historically accurate adventure game set during the California Gold Rush of 1849. Players take on the role of Jerrod Wilson, a Brooklyn newspaper reporter who decides to travel west to seek his fortune in gold.\n\nThe game was notable for its historical accuracy and educational value. Players could choose from three different routes to California: by ship around Cape Horn, by ship to Panama and then overland, or by wagon train across the continent. Each route offered different challenges and experiences.\n\nUpon reaching California, players had to navigate the realities of gold mining, including claim jumping, supply shortages, and the harsh conditions of mining life. The game included actual historical figures and events, making it as much an educational experience as an entertaining one.',
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
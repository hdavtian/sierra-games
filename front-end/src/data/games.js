// Sample game data for demonstration
export const SAMPLE_GAMES = [
    {
        id: 'kings-quest-1',
        title: "King's Quest I: Quest for the Crown",
        series: 'kings-quest',
        seriesName: "King's Quest",
        year: 1984,
        developer: 'Sierra On-Line',
        shortDescription: 'Quest for the Three Treasures and save the kingdom of Daventry in this classic adventure that started it all.',
        longDescription: `King's Quest I: Quest for the Crown was the first game in the legendary King's Quest series. Players control Sir Graham, a brave knight tasked by King Edward to find three magical treasures that will allow Graham to become the next king of Daventry. 
        
        This groundbreaking adventure game introduced many players to the world of graphic adventures, featuring colorful 16-color graphics and a text parser interface that allowed for creative problem-solving. The game is filled with fairy tale references, challenging puzzles, and memorable characters.
        
        The three treasures Graham must find are: the Magic Mirror that answers any question truthfully, the Magic Shield that protects its bearer from harm, and the Magic Chest that is always filled with gold. Each treasure is hidden in a dangerous location and guarded by formidable enemies.`,
        characters: [
            { name: 'Sir Graham', description: 'The brave knight protagonist who becomes king' },
            { name: 'King Edward', description: 'The aging king of Daventry' },
            { name: 'The Wizard', description: 'A mysterious magic user in the forest' },
            { name: 'The Woodsman', description: 'A helpful character who aids Graham' }
        ],
        features: [
            { name: 'Text Parser Interface', description: 'Type commands to interact with the game world' },
            { name: 'Colorful Graphics', description: '16-color EGA graphics that were revolutionary for 1984' },
            { name: 'Fairy Tale Setting', description: 'Classic storybook atmosphere with familiar characters' },
            { name: 'Multiple Solutions', description: 'Many puzzles have different ways to solve them' }
        ],
        fanSites: [
            { name: 'The King\'s Quest Omnipedia', url: 'https://kingsquest.fandom.com' },
            { name: 'AGD Interactive', url: 'https://www.agdinteractive.com' }
        ],
        screenshots: [
            'placeholder1.jpg', 'placeholder2.jpg', 'placeholder3.jpg'
        ],
        videos: [
            { title: 'King\'s Quest I Playthrough', url: 'https://youtube.com/watch?v=example1' },
            { title: 'King\'s Quest I Review', url: 'https://youtube.com/watch?v=example2' }
        ],
        status: 'published'
    },
    {
        id: 'space-quest-1',
        title: "Space Quest I: The Sarien Encounter",
        series: 'space-quest',
        seriesName: "Space Quest",
        year: 1986,
        developer: 'Sierra On-Line',
        shortDescription: 'Join Roger Wilco, the bumbling space janitor, on his first hilarious adventure to save the galaxy.',
        longDescription: `Space Quest I: The Sarien Encounter introduced the world to Roger Wilco, the most unlikely hero in adventure gaming. As a lowly janitor aboard the scientific vessel Arcada, Roger must save the galaxy when evil Sariens attack his ship and steal the experimental Star Generator.
        
        This game marked the beginning of the "Two Guys from Andromeda" (Mark Crowe and Scott Murphy) collaboration, bringing their unique brand of science fiction humor to the adventure game genre. The game perfectly balances comedy with genuine adventure gameplay, creating an experience that's both funny and engaging.
        
        Players guide Roger through various alien worlds, from the desert planet Kerona to the Sarien ship Deltaur. The game is notorious for its numerous ways to die, often in hilariously absurd circumstances, which became a hallmark of the series.`,
        characters: [
            { name: 'Roger Wilco', description: 'The bumbling janitor hero of the Space Quest series' },
            { name: 'The Sariens', description: 'Evil aliens who steal the Star Generator' },
            { name: 'The Arcada Crew', description: 'Roger\'s unfortunate crewmates' }
        ],
        features: [
            { name: 'Science Fiction Comedy', description: 'Perfect blend of humor and sci-fi adventure' },
            { name: 'Multiple Death Scenarios', description: 'Dozens of creative ways for Roger to meet his demise' },
            { name: 'Alien Worlds', description: 'Explore strange planets and alien technology' },
            { name: 'Arcade Sequences', description: 'Action-based mini-games mixed with adventure' }
        ],
        fanSites: [
            { name: 'Space Quest Omnipedia', url: 'https://spacequest.fandom.com' },
            { name: 'The Space Quest Historian', url: 'https://www.spacequest.net' }
        ],
        screenshots: [
            'placeholder1.jpg', 'placeholder2.jpg', 'placeholder3.jpg'
        ],
        videos: [
            { title: 'Space Quest I Playthrough', url: 'https://youtube.com/watch?v=example1' },
            { title: 'Two Guys from Andromeda Interview', url: 'https://youtube.com/watch?v=example2' }
        ],
        status: 'published'
    },
    {
        id: 'police-quest-1',
        title: "Police Quest I: In Pursuit of the Death Angel",
        series: 'police-quest',
        seriesName: "Police Quest",
        year: 1987,
        developer: 'Sierra On-Line',
        shortDescription: 'Experience the authentic life of a police officer in this realistic crime adventure.',
        longDescription: `Police Quest I: In Pursuit of the Death Angel was designed by former police officer Jim Walls, bringing unprecedented realism to adventure gaming. Players take on the role of Sonny Bonds, a patrol officer in the fictional city of Lytton, California.
        
        The game stands out for its attention to police procedure and realistic portrayal of law enforcement work. From conducting proper traffic stops to following evidence protocols, players must adhere to real police procedures to succeed. This attention to detail made the game educational as well as entertaining.
        
        The main storyline involves Sonny's pursuit of "The Death Angel," a dangerous drug dealer who has been terrorizing Lytton. Through careful police work, investigation, and following proper procedures, players help Sonny build a case and eventually confront this criminal mastermind.`,
        characters: [
            { name: 'Sonny Bonds', description: 'The player character, a dedicated police officer' },
            { name: 'The Death Angel', description: 'The main antagonist, a dangerous drug dealer' },
            { name: 'Sergeant Dooley', description: 'Sonny\'s supervisor at the police station' },
            { name: 'Marie Wilkans', description: 'Sonny\'s girlfriend and fellow officer' }
        ],
        features: [
            { name: 'Realistic Police Procedures', description: 'Authentic law enforcement protocols and methods' },
            { name: 'Crime Investigation', description: 'Gather evidence and build cases against criminals' },
            { name: 'Traffic Enforcement', description: 'Conduct proper traffic stops and write citations' },
            { name: 'Educational Value', description: 'Learn about real police work and procedures' }
        ],
        fanSites: [
            { name: 'Police Quest Omnipedia', url: 'https://policequest.fandom.com' },
            { name: 'Sierra Help', url: 'https://www.sierrahelp.com' }
        ],
        screenshots: [
            'placeholder1.jpg', 'placeholder2.jpg', 'placeholder3.jpg'
        ],
        videos: [
            { title: 'Police Quest I Walkthrough', url: 'https://youtube.com/watch?v=example1' },
            { title: 'Jim Walls Interview', url: 'https://youtube.com/watch?v=example2' }
        ],
        status: 'draft'
    },
    {
        id: 'quest-for-glory-1',
        title: "Quest for Glory I: So You Want to Be a Hero",
        series: 'quest-for-glory',
        seriesName: "Quest for Glory",
        year: 1989,
        developer: 'Sierra On-Line',
        shortDescription: 'Begin your heroic journey in this RPG-adventure hybrid that lets you choose your path.',
        longDescription: `Quest for Glory I: So You Want to Be a Hero was a revolutionary game that combined traditional adventure gaming with RPG elements. Players could choose to be a Fighter, Magic User, or Thief, each with different solutions to puzzles and different storylines.
        
        Set in the valley of Spielburg, players must prove their heroism by completing various quests and ultimately defeating the evil enchantress Baba Yaga. The game featured a day/night cycle, character statistics that could be improved through practice, and multiple ways to solve most problems.
        
        This was the first game in what would become a beloved series, allowing players to import their characters into subsequent games, making their choices and character development carry forward through the entire saga.`,
        characters: [
            { name: 'The Hero', description: 'The player character seeking to prove their worth' },
            { name: 'The Sheriff', description: 'Leader of Spielburg who gives the hero quests' },
            { name: 'Erasmus', description: 'A powerful wizard who can teach magic' },
            { name: 'Baba Yaga', description: 'The main antagonist, an evil enchantress' }
        ],
        features: [
            { name: 'Character Classes', description: 'Choose between Fighter, Magic User, and Thief' },
            { name: 'Skill Development', description: 'Practice and improve your abilities over time' },
            { name: 'Multiple Solutions', description: 'Different character types can solve problems differently' },
            { name: 'Day/Night Cycle', description: 'Time passage affects available actions and encounters' }
        ],
        fanSites: [
            { name: 'Quest for Glory Omnipedia', url: 'https://questforglory.fandom.com' },
            { name: 'The QfG Central', url: 'https://www.qfgcentral.com' }
        ],
        screenshots: [
            'placeholder1.jpg', 'placeholder2.jpg', 'placeholder3.jpg'
        ],
        videos: [
            { title: 'Quest for Glory I Complete Playthrough', url: 'https://youtube.com/watch?v=example1' },
            { title: 'QfG Character Creation Guide', url: 'https://youtube.com/watch?v=example2' }
        ],
        status: 'published'
    },
    {
        id: 'leisure-suit-larry-1',
        title: "Leisure Suit Larry in the Land of the Lounge Lizards",
        series: 'leisure-suit-larry',
        seriesName: "Leisure Suit Larry",
        year: 1987,
        developer: 'Sierra On-Line',
        shortDescription: 'Follow Larry Laffer on his quest for love in this adult-oriented comedy adventure.',
        longDescription: `Leisure Suit Larry in the Land of the Lounge Lizards was Sierra's entry into adult-oriented adventure gaming. Players control Larry Laffer, a 40-year-old virgin in a white polyester suit, as he attempts to find romance in the fictional city of Lost Wages.
        
        The game was notable for its mature themes and humor, requiring players to verify their age through a series of trivia questions before playing. Despite its adult content, the game was more comedy than anything explicit, relying on innuendo and absurd situations for its humor.
        
        Larry's adventures take him through various locations including discos, casinos, and bars, as he attempts to woo different women with varying degrees of success. The game spawned a long-running series and became a cult classic.`,
        characters: [
            { name: 'Larry Laffer', description: 'The protagonist, a hapless man searching for love' },
            { name: 'Fawn', description: 'A woman Larry encounters in his adventures' },
            { name: 'The Pimp', description: 'A dangerous character Larry must deal with' },
            { name: 'Various Women', description: 'Larry\'s potential romantic interests' }
        ],
        features: [
            { name: 'Adult Humor', description: 'Mature themes and innuendo-laden comedy' },
            { name: 'Urban Setting', description: 'Explore the seedy underbelly of Lost Wages' },
            { name: 'Age Verification', description: 'Trivia questions to verify player age' },
            { name: 'Multiple Endings', description: 'Different outcomes based on player choices' }
        ],
        fanSites: [
            { name: 'Larry Laffer\'s Home Page', url: 'https://www.larryland.com' },
            { name: 'Al Lowe\'s Humor Site', url: 'https://www.allowe.com' }
        ],
        screenshots: [
            'placeholder1.jpg', 'placeholder2.jpg', 'placeholder3.jpg'
        ],
        videos: [
            { title: 'Leisure Suit Larry Retrospective', url: 'https://youtube.com/watch?v=example1' },
            { title: 'Al Lowe Interview', url: 'https://youtube.com/watch?v=example2' }
        ],
        status: 'published'
    },
    {
        id: 'gold-rush',
        title: "Gold Rush!",
        series: 'standalone',
        seriesName: "Standalone Adventure",
        year: 1988,
        developer: 'Sierra On-Line',
        shortDescription: 'Travel to California during the 1849 Gold Rush in this historical adventure.',
        longDescription: `Gold Rush! was Sierra's attempt at creating a historically accurate adventure game set during the California Gold Rush of 1849. Players take on the role of Jerrod Wilson, a Brooklyn newspaper reporter who decides to travel west to seek his fortune in gold.
        
        The game was notable for its historical accuracy and educational value. Players could choose from three different routes to California: by ship around Cape Horn, by ship to Panama and then overland, or by wagon train across the continent. Each route offered different challenges and experiences.
        
        Upon reaching California, players had to navigate the realities of gold mining, including claim jumping, supply shortages, and the harsh conditions of mining life. The game included actual historical figures and events, making it as much an educational experience as an entertaining one.`,
        characters: [
            { name: 'Jerrod Wilson', description: 'The protagonist, a newspaper reporter seeking gold' },
            { name: 'Historical Figures', description: 'Real people from the Gold Rush era' },
            { name: 'Fellow Miners', description: 'Other prospectors trying to strike it rich' },
            { name: 'Merchants', description: 'Traders selling supplies to miners' }
        ],
        features: [
            { name: 'Historical Accuracy', description: 'Based on real events and people from 1849' },
            { name: 'Multiple Routes', description: 'Three different ways to reach California' },
            { name: 'Educational Content', description: 'Learn about the Gold Rush period' },
            { name: 'Economic Simulation', description: 'Manage money and supplies realistically' }
        ],
        fanSites: [
            { name: 'Gold Rush History', url: 'https://www.goldrushhistory.com' },
            { name: 'Sierra Adventure Games', url: 'https://www.sierragames.com' }
        ],
        screenshots: [
            'placeholder1.jpg', 'placeholder2.jpg', 'placeholder3.jpg'
        ],
        videos: [
            { title: 'Gold Rush! Historical Documentary', url: 'https://youtube.com/watch?v=example1' },
            { title: 'Gold Rush! Gameplay', url: 'https://youtube.com/watch?v=example2' }
        ],
        status: 'published'
    }
];

// Demo admin credentials
export const DEMO_CREDENTIALS = {
    username: 'admin',
    password: 'sierra123'
};

// Game series information
export const GAME_SERIES = {
    'kings-quest': {
        name: "King's Quest",
        color: '#8b4513',
        description: 'Medieval fantasy adventures in the land of Daventry'
    },
    'space-quest': {
        name: "Space Quest", 
        color: '#4169e1',
        description: 'Sci-fi comedy adventures with Roger Wilco'
    },
    'police-quest': {
        name: "Police Quest",
        color: '#000080', 
        description: 'Realistic police procedural adventures'
    },
    'quest-for-glory': {
        name: "Quest for Glory",
        color: '#228b22',
        description: 'RPG-adventure hybrids with character progression'
    },
    'leisure-suit-larry': {
        name: "Leisure Suit Larry",
        color: '#ff1493',
        description: 'Adult comedy adventures with Larry Laffer'
    },
    'standalone': {
        name: "Standalone",
        color: '#daa520',
        description: 'Independent adventure games'
    }
};

// Utility functions
export const findGameById = (gameId) => {
    return SAMPLE_GAMES.find(game => game.id === gameId);
};

export const getGamesBySeries = (seriesId) => {
    return SAMPLE_GAMES.filter(game => game.series === seriesId);
};

export const formatYear = (year) => {
    return year ? year.toString() : 'Unknown';
};

export const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
};
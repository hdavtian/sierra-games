-- V3: Create screenshots table for game screenshots
CREATE TABLE screenshots (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    game_id VARCHAR(255) NOT NULL,
    title VARCHAR(255),
    description TEXT,
    filename VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    CONSTRAINT fk_screenshots_game_id 
        FOREIGN KEY (game_id) REFERENCES games(id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
    
    INDEX idx_screenshots_game_id (game_id)
);
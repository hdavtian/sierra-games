-- Create games table
CREATE TABLE games (
    id VARCHAR(100) NOT NULL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    series VARCHAR(50) NOT NULL,
    series_name VARCHAR(100) NOT NULL,
    year INT NOT NULL,
    developer VARCHAR(100) NOT NULL,
    short_description VARCHAR(500) NOT NULL,
    long_description TEXT,
    characters JSON,
    features JSON,
    fan_sites JSON,
    screenshots JSON,
    videos JSON,
    status ENUM('DRAFT', 'PUBLISHED', 'ARCHIVED') NOT NULL DEFAULT 'DRAFT',
    featured BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_series (series),
    INDEX idx_year (year),
    INDEX idx_status (status),
    INDEX idx_featured (featured),
    INDEX idx_series_status (series, status),
    INDEX idx_year_status (year, status)
);
# Sierra Games Database

Database scripts, migrations, and schema for the Sierra Games application.

## 🗄️ Database Structure (Planned)

### Tables

- **games**: Core game information
- **game_series**: Game series data
- **characters**: Game characters
- **screenshots**: Game media files
- **users**: User accounts
- **reviews**: User reviews and ratings

### Schema Design

```sql
-- Core tables structure (planned)
CREATE TABLE game_series (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    color VARCHAR(7),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE games (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    series_id BIGINT,
    year INT,
    developer VARCHAR(255),
    description TEXT,
    short_description VARCHAR(500),
    status ENUM('draft', 'published') DEFAULT 'draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (series_id) REFERENCES game_series(id)
);
```

## 📁 Directory Structure (Future)

```
database/
├── migrations/         # Database migration scripts
├── seed-data/         # Initial data population
├── schema/            # Database schema definitions
├── procedures/        # Stored procedures
└── indexes/           # Performance indexes
```

## 🚀 Setup Instructions (Future)

1. **Install MySQL 8+**
2. **Create database**: `CREATE DATABASE sierra_games;`
3. **Run migrations**: Execute scripts in order
4. **Seed data**: Populate with sample Sierra games
5. **Configure Spring Boot**: Update application.properties

## 🔧 Migration Strategy

- **Version controlled**: Each migration numbered sequentially
- **Rollback support**: Down migrations for each change
- **Environment specific**: Dev, staging, production configs
- **Data integrity**: Foreign key constraints and validations

---

**Ready for MySQL integration!**

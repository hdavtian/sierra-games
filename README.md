# Sierra Games - Full Stack Application

A modern full-stack web application showcasing classic Sierra adventure games that defined a generation of gaming. This monorepo contains both frontend and backend components for a complete gaming portfolio experience.

## 🎮 Project Overview

This application celebrates legendary Sierra games including King's Quest, Space Quest, Police Quest, Quest for Glory, and more. Built as a full-stack solution with modern technologies and best practices.

## 🏗️ Monorepo Structure

```
sierra-games/
├── front-end/          # React + Vite frontend application
├── back-end/           # Spring Boot API backend (planned)
├── database/           # Database scripts and migrations (planned)
├── docs/               # Project documentation
├── package.json        # Root workspace configuration
└── README.md          # This file
```

## 🛠️ Technology Stack

### Frontend

- **React 19.0.0** - Modern React with latest features
- **Vite 7.1.11** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Bootstrap 5.3.3** - Responsive UI framework
- **SCSS** - Enhanced CSS with variables and mixins

### Backend (Planned)

- **Java Spring Boot** - REST API backend
- **MySQL** - Database for game data
- **Spring Security** - Authentication and authorization
- **JPA/Hibernate** - Object-relational mapping

### DevOps & Tools

- **npm Workspaces** - Monorepo package management
- **IntelliJ IDEA Ultimate** - IDE support for full-stack development
- **Git** - Version control
- **Docker** - Containerization (planned)

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm 8+
- Java 17+ (for backend development)
- MySQL 8+ (for database)

### Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd sierra-games
   ```

2. **Install all dependencies**:

   ```bash
   npm run install:all
   ```

3. **Start frontend development**:
   ```bash
   npm run dev:frontend
   ```

The frontend will be available at http://localhost:3000

### Development Commands

```bash
# Frontend development
npm run dev:frontend          # Start frontend dev server
npm run build:frontend        # Build frontend for production
npm run preview:frontend      # Preview frontend production build

# Backend development (when implemented)
npm run dev:backend           # Start backend dev server
npm run build:backend         # Build backend application

# Full stack development
npm run dev                   # Start frontend (default)
npm run build                 # Build all applications
npm run test                  # Run all tests
npm run clean                 # Clean all build outputs
```

## 📁 Project Components

### Frontend (`/front-end`)

- **Homepage**: Game gallery with filtering and sorting
- **Game Details**: Individual game pages with rich content
- **Admin Interface**: Game management dashboard
- **Responsive Design**: Mobile-first approach
- **Modern UX**: Smooth animations and interactions

### Backend (`/back-end`) - _Planned_

- **REST API**: Game data management endpoints
- **Authentication**: Secure admin access
- **Database Integration**: MySQL with JPA
- **File Upload**: Game screenshots and media
- **Search & Filtering**: Advanced game queries

### Database (`/database`) - _Planned_

- **Schema**: Game, series, characters, screenshots tables
- **Migrations**: Version-controlled database changes
- **Seed Data**: Sample Sierra games content
- **Indexes**: Performance optimization

## ✨ Features

### Current (Frontend)

- ✅ **Game Gallery**: Browse games in grid/list view
- ✅ **Dynamic Filtering**: By series, year, features
- ✅ **Search Functionality**: Find games by title/description
- ✅ **Game Details**: Rich individual game pages
- ✅ **Admin Dashboard**: CRUD operations for games
- ✅ **Responsive Design**: Works on all devices
- ✅ **Modal Galleries**: Screenshot and video viewing

### Planned (Full Stack)

- 🔄 **User Authentication**: Secure login system
- 🔄 **API Integration**: Connect frontend to backend
- 🔄 **File Management**: Upload and manage game media
- 🔄 **Advanced Search**: Full-text search capabilities
- 🔄 **Comments System**: User reviews and ratings
- 🔄 **Favorites**: Personal game collections
- 🔄 **Admin Analytics**: Usage statistics and insights

## 🎮 Demo Credentials

For admin access to the current frontend:

- **Username**: admin
- **Password**: admin123

## 🗂️ Game Series Included

- **King's Quest** - Classic fantasy adventure series
- **Space Quest** - Sci-fi comedy adventures
- **Quest for Glory** - RPG/adventure hybrid series
- **Leisure Suit Larry** - Adult comedy adventures
- **Police Quest** - Crime investigation series
- **Gabriel Knight** - Supernatural mystery series

## 🔧 Development Workflow

### Frontend Development

1. Navigate to `/front-end` directory
2. Make changes to React components
3. Hot reload provides instant feedback
4. Test across different breakpoints

### Full Stack Development (Future)

1. Start backend API server
2. Start frontend development server
3. Both communicate via REST API
4. Database changes via migrations

## 📋 Contributing

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/new-feature`
3. **Make changes** in appropriate workspace
4. **Test thoroughly** across all breakpoints
5. **Submit pull request** with detailed description

## 🌟 Future Roadmap

### Phase 1: Backend Integration

- Spring Boot API development
- MySQL database setup
- Authentication system
- File upload capabilities

### Phase 2: Enhanced Features

- User registration and profiles
- Game rating system
- Comment and review system
- Advanced search and filtering

### Phase 3: DevOps & Scale

- Docker containerization
- CI/CD pipeline
- Cloud deployment
- Performance optimization

## 📄 License

ISC License - Personal portfolio project

## 👨‍💻 Author

**harmadavtian.com**

_Created with ❤️ for the Sierra adventure game community_

---

## 🔗 Links

- **Frontend Demo**: [To be deployed]
- **API Documentation**: [To be created]
- **Project Wiki**: [To be added]
- **Issue Tracker**: [GitHub Issues]

**🎯 This monorepo is ready for full-stack development with modern tooling and best practices!**

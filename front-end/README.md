# My Favorite Sierra Role Playing Games - React Version

This is a React-based frontend application showcasing Sierra's classic role-playing games. The site has been converted from static HTML/CSS/JS to a modern React application using Vite as the build tool.

## 🛠️ Technologies Used

- **React 19.0.0** - Latest React version with modern features
- **Vite 7.1.11** - Fast build tool with hot module replacement
- **React Router DOM** - Client-side routing
- **Bootstrap 5.3.3** - UI framework for responsive design
- **SCSS** - Enhanced CSS with variables and mixins
- **Next.js 15.0.4** - Server-side rendering capabilities (optional)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd c:\sites\sierra-games\front-end-1
```

2. Install dependencies:

```bash
npm install
```

### Development

Start the development server with hot reloading:

```bash
npm run dev
```

The application will be available at:

- **Local**: http://localhost:3000/
- **Network**: http://[your-ip]:3000/

### Building for Production

Build the application for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/         # Reusable React components
│   ├── Header.jsx     # Navigation header
│   └── Footer.jsx     # Site footer
├── pages/             # Page components
│   ├── HomePage.jsx           # Main homepage
│   ├── GameDetailPage.jsx     # Individual game details
│   ├── AdminLoginPage.jsx     # Admin authentication
│   └── AdminDashboardPage.jsx # Admin dashboard
├── data/              # Game data and utilities
│   └── games.js       # Game information and series data
├── styles/            # SCSS stylesheets
│   ├── main.scss      # Main stylesheet
│   ├── _variables.scss # SCSS variables
│   └── _mixins.scss   # SCSS mixins
└── main.jsx           # React application entry point
```

## ✨ Features

### Public Features

- **Game Gallery**: Browse Sierra games in grid or list view
- **Filtering & Sorting**: Filter by series, search games, sort by various criteria
- **Game Details**: Detailed pages for each game with screenshots and videos
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Image Gallery**: Modal galleries for game screenshots

### Admin Features

- **Admin Login**: Secure authentication (demo credentials: admin/admin123)
- **Game Management**: Add, edit, and delete games
- **Dashboard Statistics**: Overview of total games, series, images, and videos
- **Search & Filter**: Advanced filtering for game management

## 🔑 Demo Credentials

For admin access, use these demo credentials:

- **Username**: admin
- **Password**: sierra123

## 🎮 Game Series Included

- **King's Quest** - Classic adventure series
- **Space Quest** - Sci-fi comedy adventures
- **Quest for Glory** - RPG/adventure hybrid series
- **Leisure Suit Larry** - Adult comedy adventures
- **Police Quest** - Crime investigation series
- **Gabriel Knight** - Supernatural mystery series

## 📋 Available Scripts

- `npm run dev` - Start development server with hot reloading
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run build-css` - Compile SCSS to CSS (legacy)
- `npm run watch-css` - Watch SCSS files for changes (legacy)

## 🔧 Development Notes

### SCSS Warnings

The application shows deprecation warnings for SCSS @import statements and color functions. These are harmless warnings about future Sass versions and don't affect functionality.

### Hot Reloading

Vite provides instant hot module replacement, so changes to React components and styles are reflected immediately in the browser.

### Path Aliases

The project uses `@/` as an alias for the `src/` directory, making imports cleaner:

```javascript
import { SAMPLE_GAMES } from "@/data/games";
import Header from "@/components/Header";
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

ISC License - Personal portfolio project

## 👨‍💻 Author

harmadavtian.com

---

**🎯 You can now run your local development server using Vite and make style changes and component changes as necessary!**

The React conversion is complete with all original functionality preserved and modernized.

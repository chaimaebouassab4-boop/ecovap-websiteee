
EcoVap is a professional cleaning, disinfection, and pest control company based in Tangier, Morocco, specializing in innovative dry steam cleaning methods. This full-stack web application serves as the company's digital presence, showcasing their eco-friendly services that use chemical-free cleaning solutions.
The company provides high-quality cleaning and disinfection services using dry steam technology, eliminating the need for toxic chemical products while ensuring superior results and environmental safety.
## Core Services:

🧼 Professional dry steam cleaning
🦠 Chemical-free disinfection
🐛 Eco-friendly pest control (désinsectisation)
🏢 Commercial and residential services
♻️ Environmentally sustainable solutions

## ✨ Features

- 🎨 Modern, responsive design with Tailwind CSS
- 🌐 Multi-page navigation (Home, About, Services, Contact)
- 📍 Interactive Google Maps integration
- 💼 Professional service showcase
- 📱 Mobile-friendly interface
- ⚡ Fast performance with Vite
- 🔒 Secure authentication with Passport.js
- 💾 PostgreSQL database with Drizzle ORM

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Wouter** - Routing
- **Radix UI** - Accessible components
- **Lucide React** - Icons
- **Framer Motion** - Animations

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **PostgreSQL** - Database
- **Drizzle ORM** - Database toolkit
- **Passport.js** - Authentication
- **WebSocket (ws)** - Real-time communication

## 🚀 Getting Started

### Prerequisites

- Node.js v24.x or higher
- PostgreSQL database
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/chaimaebouassab4-boop/ecovap-websiteee.git
cd ecovap-websiteee
```

2. Install dependencies
```bash
cd client
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Set up the database
```bash
npm run db:push
```

5. Run the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type check with TypeScript
- `npm run db:push` - Push database schema changes

## 🏗️ Project Structure

```
ecovap-websiteee/
├── client/
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── hooks/       # Custom hooks
│   │   ├── lib/         # Utilities
│   │   └── pages/       # Page components
│   ├── server/          # Backend server
│   ├── script/          # Build scripts
│   └── shared/          # Shared types/utils
├── dist/                # Production build
└── node_modules/        # Dependencies
```

## 🌍 Deployment

The application can be deployed to various platforms:

- **Vercel** - Recommended for frontend
- **Heroku** - Full-stack deployment
- **Railway** - Modern hosting
- **DigitalOcean** - VPS deployment

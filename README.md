# Sudip Portfolio

A modern, responsive personal portfolio website built with React and Node.js, showcasing projects, skills, and experience as a frontend developer.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Theme**: Toggle between dark and light themes
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Contact Form**: Integrated contact form with email functionality
- **Project Showcase**: Display featured and other projects with live demos and GitHub links
- **Skills Section**: Visual representation of technical skills
- **Experience Timeline**: Professional experience and education details
- **Social Integration**: Links to GitHub, LinkedIn, and Instagram

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **shadcn/ui** - UI component library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Resend** - Email service
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
sudip-portfolio/
├── backend/
│   ├── server.js          # Express server with contact API
│   ├── package.json       # Backend dependencies
│   └── .gitignore
├── frontend/
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── layout/    # Layout components (Navbar, Footer)
│   │   │   ├── sections/  # Portfolio sections
│   │   │   └── ui/        # Reusable UI components
│   │   ├── data/          # Portfolio data configuration
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   ├── App.jsx        # Main App component
│   │   └── main.jsx       # React entry point
│   ├── package.json       # Frontend dependencies
│   ├── vite.config.js     # Vite configuration
│   ├── tailwind.config.js # Tailwind configuration
│   └── index.html         # HTML template
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sudip294/Sudip-portfolio.git
   cd sudip-portfolio
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory:
   ```env
   RESEND_API_KEY=your_resend_api_key
   EMAIL_USER=your_email@example.com
   PORT=10000
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the Backend**
   ```bash
   cd backend
   node server.js
   ```
   The backend will run on `http://localhost:10000`

2. **Start the Frontend**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

### For Local Development

If you want to test the contact form locally, update the API URL in `frontend/src/components/sections/Contact.jsx`:

Change:
```javascript
"https://sudip-portfolio.onrender.com/api/contact"
```
To:
```javascript
"http://localhost:10000/api/contact"
```

## 🎨 Customization

The portfolio is designed to be easily customizable. Edit the following files to personalize your portfolio:

### Personal Information
- `frontend/src/data/portfolio.js` - Update all personal details, projects, skills, and social links

### Styling
- `frontend/src/index.css` - Global styles
- `tailwind.config.js` - Tailwind configuration
- `frontend/src/App.css` - App-specific styles

### Components
- Components are marked with "EDIT THIS" comments for easy customization
- Update navigation items in `Navbar.jsx`
- Modify sections in the respective component files

## 📧 Email Configuration

The contact form uses Resend for email delivery:

1. Sign up at [Resend](https://resend.com)
2. Get your API key
3. Add it to the `.env` file
4. Update `EMAIL_USER` with your email address

## 🚀 Deployment

### Frontend Deployment (Vercel)
```bash
cd frontend
npm run build
# Deploy the dist/ folder to Vercel
```

### Backend Deployment (Render)
```bash
cd backend
# Deploy to Render with environment variables set
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👨‍💻 Author

**Sudip Bag**
- Email: dipalbag123@gmail.com
- LinkedIn: [Sudip Bag](https://www.linkedin.com/in/sudip-bag28/)
- GitHub: [@Sudip294](https://github.com/Sudip294)
- Portfolio: [sudip-portfolio.vercel.app](https://sudip-portfolio-project.vercel.app/)

## 🙏 Acknowledgments

- Icons by [Lucide React](https://lucide.dev/)
- UI components inspired by [shadcn/ui](https://ui.shadcn.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

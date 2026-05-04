# Complaint Portal Frontend

React + Vite frontend for the Complaint Portal, providing a modern interface for citizens to submit, track, and escalate complaints.

## Quick Start

```bash
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

## Environment Setup

Create `.env` file:

```env
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=Complaint Portal
```

## Project Structure

```
frontend/
├── src/
│   ├── api/
│   │   └── config.js      # API configuration
│   ├── auth/
│   │   ├── CitizenAuth.jsx    # Citizen login
│   │   └── AuthorityAuth.jsx   # Authority login
│   ├── components/
│   │   ├── TopBar.jsx     # Navigation header
│   │   ├── Footer.jsx     # Footer
│   │   ├── StatusStepper.jsx   # Status display
│   │   ├── CameraModal.jsx     # Image capture
│   │   └── ImagePanel.jsx      # Image gallery
│   ├── views/
│   │   ├── LandingView.jsx     # Home page
│   │   ├── CitizenApp.jsx      # Citizen dashboard
│   │   └── AuthorityApp.jsx    # Authority dashboard
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.cjs
└── package.json
```

## Features

### Citizen Features
- **Submit Complaint**: Upload complaint with images/documents
- **Track Status**: Real-time complaint status tracking
- **Escalation**: Direct escalation to commissioners
- **History**: View all submitted complaints
- **Notifications**: Email/SMS updates on complaint progress

### Authority Features
- **Dashboard**: Overview of complaints
- **Filter & Sort**: Advanced complaint filtering
- **Respond**: Add updates and resolution notes
- **Escalate**: Forward to higher authorities
- **Reports**: Generate complaint statistics

## Components

### LandingView
Home page with authentication options (Citizen/Authority)

### CitizenApp
Main dashboard for complaint submission and tracking

### AuthorityApp
Authority dashboard for complaint management and response

### StatusStepper
Visual representation of complaint escalation status

### CameraModal
Modal for capturing images directly from device camera

### ImagePanel
Gallery view for complaint evidence images

## Styling

- **Tailwind CSS** - Utility-first CSS framework
- **Custom CSS** - Global styles in `index.css`
- **Dark Theme** - Dark glassmorphism design aesthetic

## Build

Development mode:
```bash
npm run dev
```

Production build:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## API Integration

All API calls go through `src/api/config.js`:

```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Example fetch
const response = await fetch(`${API_URL}/api/complaints`, {
  headers: { 'Authorization': `Bearer ${token}` }
});
```

## Authentication Flow

1. User selects role (Citizen/Authority)
2. Login/Register with credentials
3. JWT token stored in localStorage
4. Token included in all subsequent requests
5. Logout clears token and session data

## File Upload

Images uploaded via:
1. **Camera Modal** - Direct camera capture
2. **File Input** - Select from device
3. **Cloudinary** - Cloud storage integration

## State Management

Uses React hooks for state management:
- `useState` - Component state
- `useEffect` - Side effects
- `useContext` - Global auth state (future)

## Performance

- **Code Splitting** - Lazy load components
- **Image Optimization** - Compress before upload
- **Caching** - Browser caching enabled
- **Minification** - Vite automatically minifies

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Dependencies

- **react** - UI library
- **react-dom** - DOM rendering
- **lucide-react** - Icons
- **vite** - Build tool
- **tailwindcss** - CSS framework

## Development

Hot module replacement (HMR) enabled. Changes reflect instantly.

## Testing

```bash
npm run test
```

## License

ISC

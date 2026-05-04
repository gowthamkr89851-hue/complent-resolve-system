# Complaint Portal

A dedicated standalone portal for citizens to submit, track, and escalate complaints to municipal authorities with transparency and accountability.

## Features

- Submit complaints with evidence (images/documents)
- Real-time complaint status tracking
- Direct escalation to authorities
- 48-hour commissioner bypass protocol
- Transparent accountability chain
- Multi-channel support (SMS, Email, WhatsApp)

## Project Structure

```
ComplaintPortal/
├── backend/          # Express.js API server
├── frontend/         # React/Vite UI
└── README.md
```

## Getting Started

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Backend requires:
- `PORT` - Server port (default: 5000)
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - JWT signing secret
- `CLOUDINARY_NAME`, `CLOUDINARY_KEY`, `CLOUDINARY_SECRET` - Cloud storage

## Technology Stack

- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Frontend**: React, Vite, Tailwind CSS
- **Auth**: JWT tokens
- **Storage**: Cloudinary (images)
- **Email**: Nodemailer

## License

ISC

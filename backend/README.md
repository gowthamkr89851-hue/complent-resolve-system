# Complaint Portal Backend

Express.js REST API server for the Complaint Portal, handling authentication, complaint management, and integration with municipal authority systems.

## Quick Start

```bash
npm install
cp .env.example .env
npm run dev
```

Server runs on `http://localhost:5000`

## Environment Setup

Create `.env` file with the following variables:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/complaint-portal
JWT_SECRET=your_secret_key_here
CLOUDINARY_NAME=your_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
BBMP_HELPLINE=080-22660000
BBMP_WHATSAPP=9480685700
BBMP_EMAIL=comm@bbmp.gov.in
```

## Project Structure

```
backend/
├── config/
│   ├── db.js           # MongoDB connection
│   ├── env.js          # Environment validation
│   └── cloudinary.js   # Cloud storage setup
├── models/
│   ├── User.js         # User schema
│   ├── Complaint.js    # Complaint schema
│   └── Notification.js # Notification schema
├── routes/
│   ├── auth.js         # Authentication endpoints
│   ├── complaints.js   # Complaint management
│   ├── authority.js    # Authority endpoints
│   └── notifications.js # Notification endpoints
├── middleware/
│   └── auth.js         # JWT verification
├── utils/
│   ├── email.js        # Email notifications
│   └── aiRouter.js     # AI routing logic
├── server.js           # Express app setup
└── package.json
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Complaints
- `GET /api/complaints` - List all complaints
- `POST /api/complaints` - Create new complaint
- `GET /api/complaints/:id` - Get complaint details
- `PUT /api/complaints/:id` - Update complaint status
- `POST /api/complaints/:id/escalate` - Escalate to commissioner

### Authority
- `GET /api/authority/dashboard` - Authority dashboard
- `GET /api/authority/complaints` - View authority complaints
- `PUT /api/authority/complaints/:id` - Respond to complaint

### Notifications
- `GET /api/notifications` - User notifications
- `POST /api/notifications/email` - Send email notification
- `POST /api/notifications/sms` - Send SMS notification

## Dependencies

- **express** - Web framework
- **mongoose** - MongoDB ORM
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **cloudinary** - Image storage
- **nodemailer** - Email service
- **cors** - Cross-origin requests
- **helmet** - Security headers
- **morgan** - Request logging

## Development

Run in development mode with auto-reload:

```bash
npm run dev
```

Production build:

```bash
npm start
```

## Database Schema

### User Model
```javascript
{
  name: String,
  email: String (unique),
  phone: String,
  password: String (hashed),
  userType: 'citizen' | 'authority',
  createdAt: Date
}
```

### Complaint Model
```javascript
{
  userId: ObjectId,
  title: String,
  description: String,
  category: String,
  location: String,
  images: [String],
  status: 'submitted' | 'processing' | 'resolved' | 'escalated',
  priority: 'low' | 'medium' | 'high',
  escalatedAt: Date,
  resolvedAt: Date,
  createdAt: Date
}
```

## Error Handling

All endpoints return consistent error responses:

```json
{
  "message": "Error description",
  "error": "detailed error (dev only)"
}
```

## Authentication

JWT tokens required for protected routes. Include token in header:

```
Authorization: Bearer <token>
```

## Testing

```bash
npm test
```

## License

ISC

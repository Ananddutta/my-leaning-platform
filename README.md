# Lakshya Learning Platform

A comprehensive online teaching platform with features for recorded classes, live sessions, and notes management.

## Features

- **User Authentication**: Secure login and registration system
- **Course Management**: Create, edit, and organize courses
- **Video Content**: Upload and stream recorded classes
- **Notes Management**: Create and share course notes
- **Progress Tracking**: Monitor student engagement and progress
- **Responsive Design**: Works on all devices (desktop, tablet, mobile)

## Project Structure

```
lakshya-learning-platform/
├── public/                  # Static files
│   ├── css/                 # CSS stylesheets
│   │   ├── styles.css       # Main stylesheet
│   │   ├── auth.css         # Authentication pages styles
│   │   └── dashboard.css    # Dashboard styles
│   ├── js/                  # JavaScript files
│   │   ├── script.js        # Main JavaScript
│   │   ├── auth.js          # Authentication functionality
│   │   └── dashboard.js     # Dashboard functionality
│   ├── images/              # Image assets
│   ├── index.html           # Landing page
│   ├── login.html           # Login page
│   ├── register.html        # Registration page
│   └── dashboard.html       # User dashboard
├── server.js                # Simple Express server
├── package.json             # Project dependencies
└── README.md                # Project documentation
```

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/lakshya-learning-platform.git
   cd lakshya-learning-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Usage

### Landing Page
The landing page showcases the platform's features and benefits. Users can navigate to different sections using the navigation menu.

### Authentication
- **Login**: Users can log in using their email and password
- **Register**: New users can create an account

### Dashboard
After logging in, users are directed to their dashboard where they can:
- View enrolled courses
- Track progress
- Access recorded classes
- Manage notes
- View upcoming events

## Extending the Platform

### Adding Backend Functionality
This project includes a simple Express server to serve static files. To add backend functionality:

1. Create API routes in `server.js`
2. Set up a database (MongoDB, PostgreSQL, etc.)
3. Implement authentication logic
4. Create controllers for courses, users, etc.

### Adding Real Video Streaming
To implement real video streaming:

1. Set up cloud storage (AWS S3, Google Cloud Storage)
2. Implement video upload functionality
3. Use a video streaming service or implement your own using HLS or DASH

## License

MIT 
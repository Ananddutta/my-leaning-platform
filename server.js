require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(cookieParser());

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'your_session_secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Serve static files
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/lakshya_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Import routes
require('./config/passport');
const authRoutes = require('./routes/auth');
const entranceRoutes = require('./routes/entrance');
const paymentRoutes = require('./routes/payment');
const classPaymentRoutes = require('./routes/classPayment');

// Import subscription middleware
const { checkSubscription } = require('./middleware/subscriptionCheck');

// Global middleware
app.use(checkSubscription);

// Use routes
app.use('/auth', authRoutes);
app.use('/entrance', entranceRoutes);
app.use('/payment', paymentRoutes);
app.use('/payment/class', classPaymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 
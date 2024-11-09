const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');           // Authentication routes
const loanRoutes = require('./routes/loans');          // Loan management routes
const repaymentRoutes = require('./routes/repayments'); // Repayment management routes
const authMiddleware = require('./middleware/authMiddleware'); // Middleware for authentication

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database setup
require('./db'); // Importing the database connection to ensure it's initialized

// API Routes
app.use('/api/auth', authRoutes);        // Authentication-related routes
app.use('/api/loans', loanRoutes);       // Loan-related routes (requires user authentication)
app.use('/api/repayments', repaymentRoutes); // Repayment-related routes (requires user authentication)

// Default route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the Mini Loan App API');
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

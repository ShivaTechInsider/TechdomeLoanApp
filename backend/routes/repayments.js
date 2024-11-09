const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {
  createRepayment,
  getRepaymentsByLoanId,
  updateRepaymentStatus
} = require('../models/Repayment');

// Route to create a repayment schedule for a loan (Admin only)
router.post('/:loanId', authMiddleware, async (req, res) => {
  const { loanId } = req.params;
  const { repaymentAmount, dueDate } = req.body;

  try {
    const repayment = await createRepayment(loanId, repaymentAmount, dueDate);
    res.status(201).json({ message: 'Repayment scheduled successfully', repayment });
  } catch (error) {
    res.status(500).json({ message: 'Error creating repayment', error: error.message });
  }
});

// Route to get all repayments for a specific loan (Customer & Admin)
router.get('/:loanId', authMiddleware, async (req, res) => {
  const { loanId } = req.params;

  try {
    const repayments = await getRepaymentsByLoanId(loanId);
    res.status(200).json(repayments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching repayments', error: error.message });
  }
});

// Route to mark a repayment as paid (Customer)
router.put('/:repaymentId/pay', authMiddleware, async (req, res) => {
  const { repaymentId } = req.params;
  const { amountPaid } = req.body;

  try {
    const result = await updateRepaymentStatus(repaymentId, amountPaid);
    if (result.success) {
      res.status(200).json({ message: 'Repayment marked as paid' });
    } else {
      res.status(400).json({ message: result.message });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating repayment status', error: error.message });
  }
});

module.exports = router;

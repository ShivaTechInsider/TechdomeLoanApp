const express = require('express');
const { createLoan, getLoansByUserId } = require('../models/Loan');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', authMiddleware, async (req, res) => {
    const { amount, term } = req.body;
    const loan = await createLoan(req.user.id, amount, term);
    res.json({ loan });
});

router.get('/user-loans', authMiddleware, async (req, res) => {
    const loans = await getLoansByUserId(req.user.id);
    res.json({ loans });
});

module.exports = router;

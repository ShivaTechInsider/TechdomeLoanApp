const db = require('../db');

const createRepayment = (loanId, amount, date) => {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO repayments (loan_id, amount, date) VALUES (?, ?, ?)', 
            [loanId, amount, date], 
            function (err) {
                if (err) reject(err);
                resolve({ id: this.lastID });
            }
        );
    });
};

module.exports = { createRepayment };

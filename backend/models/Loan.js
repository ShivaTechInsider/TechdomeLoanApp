const db = require('../db');

const createLoan = (userId, amount, term) => {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO loans (user_id, amount, term) VALUES (?, ?, ?)', 
            [userId, amount, term], 
            function (err) {
                if (err) reject(err);
                resolve({ id: this.lastID });
            }
        );
    });
};

const getLoansByUserId = (userId) => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM loans WHERE user_id = ?', [userId], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

module.exports = { createLoan, getLoansByUserId };

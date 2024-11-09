const db = require('../db');

const getUserByUsername = (username) => {
    return new Promise((resolve, reject) => {
        db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
            if (err) reject(err);
            resolve(row);
        });
    });
};

const createUser = (username, password, isAdmin = false) => {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO users (username, password, isAdmin) VALUES (?, ?, ?)',
            [username, password, isAdmin],
            function (err) {
                if (err) reject(err);
                resolve({ id: this.lastID });
            }
        );
    });
};

module.exports = { getUserByUsername, createUser };

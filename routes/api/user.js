// routes/api/users.js
const express = require('express');
const router = express.Router();

const User = require('../../models/Users');

router.get('/test', (req, res) => res.send('user route testing!\n'));

router.post('/checkAdmin', (req, res) => {
    console.log(req.body);
    try {
        if (req.body.password) {
            if (req.body.password === 'oberonel') {
                res.status(200).json({ message: 'Success' });
            } else {
                res.status(401).json({ message: 'Unauthorized' });
            }
        }
    } catch (error) {
        console.log(error);
    }
});

router.get('/', (req, res) => {
    var a = req.k;
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(404).json({ nobooksfound: 'No Users found' }));
});

router.post('/add', (req, res) => {
    User.create(req.body)
        .then((users) => res.json({ msg: 'User added successfully' }))
        .catch((err) => res.status(400).json({ error: err }));
});

// curl -X POST http://localhost:8082/api/books -H "Content-Type: application/json" -d '{"title": "hello", "isbn": 12345, "author":"dharmandi", "description" : "hello", "published_date": "2022-07-26"}'

module.exports = router;

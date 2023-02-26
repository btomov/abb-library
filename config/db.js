const mongoose = require('mongoose');
require('dotenv').config();
const db = process.env.MONGO_URI;
console.log(db);
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
        });
        mongoose.set('debug', true);

        console.log('MongoDB is Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;

const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://iNotepad:Ankit1607@query.yxb6f.mongodb.net/?retryWrites=true&w=majority&appName=Query';
const connectDB = () => {
    mongoose.connect(mongoURI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Failed to connect to MongoDB", err));
}
module.exports = connectDB;
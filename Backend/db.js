const mongoose = require('mongoose')
const MONGOURL = 'mongodb+srv://AIRNotes:AIRNotes1234@clusternotes.9wssv7p.mongodb.net/test'

const connectToMongo = () => {
    mongoose.connect(MONGOURL)
    console.log('Connected to MongoDB')
}

module.exports = connectToMongo;

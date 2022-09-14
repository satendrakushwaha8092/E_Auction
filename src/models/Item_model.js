const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    //Id, name, image, price, user_id

    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        trim: true,
    }

}, { timestamps: true });

module.exports = mongoose.model('item', itemSchema)
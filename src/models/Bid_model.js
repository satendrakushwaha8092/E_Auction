const mongoose = require('mongoose')

const bidSchema = new mongoose.Schema({
    //Id, auctionId, itemId, price, userId

    auctionId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
        trim: true
    },
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        trim: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('bid', bidSchema)
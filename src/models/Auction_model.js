const mongoose = require('mongoose')

const auctionSchema = new mongoose.Schema({
// Name
// userId
// Items Array (Each item has own status : pending, active, sold)
// Auction Status  (Independent from status in items array)
// Start Time
// End Time

    Name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        trim: true
    },
    Items_Array: [{
        type: Number,
        required: true,
        trim: true
    }],
    Auction_Status: {
        type: String,
        required: true,
        trim: true,
        default: "INR"
    },
    Start_Time: {
        type: Date,
        required: true,
        trim: true,
        default: '₹'
    },
    End_Time: {
        type: Date,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('auction', auctionSchema)
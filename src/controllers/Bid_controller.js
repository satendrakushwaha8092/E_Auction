const BidModel=require('../models/Bid_model')
const AuctionModel=require('../models/Auction_model')
const ItemModel=require('../models/Item_model')
const UserModel=require('../models/User_model')

const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true
}

const isValidData2 = function (value) {
    if (typeof (value) === "string" && (value).trim().length === 0) return false
    return true
}

const isValidObjectId = function (objectId) {
    return mongoose.Types.ObjectId.isValid(objectId)
}

const createBid=async (req,res)=>{
    try{
    const data=req.body
    
        if (Object.keys(data) == 0) return res.status(400).send({
            status: false,
            msg: "No input provided"
        })


        if (!isValid(data.auctionId)) {
            return res.status(400).send({
                status: false,
                msg: "auctionId is required"
            })
        }

        if (!isValidObjectId(data.auctionId)) {
            return res.status(400).send({
                status: false,
                msg: "auctionId is not valid"
            })
        }

        if(!await AuctionModel.findOne({_id:data.auctionId})){
            return res.status(400).send({
                status: false,
                msg: "AuctionId is not present"
            })
        }

        if (!isValid(data.itemId)) {
            return res.status(400).send({
                status: false,
                msg: "itemId is required"
            })
        }

        if (!isValidObjectId(data.itemId)) {
            return res.status(400).send({
                status: false,
                msg: "itemId is not valid"
            })
        }

        if(!await ItemModel.findOne({_id:data.itemId})){
            return res.status(400).send({
                status: false,
                msg: "itemId is not present"
            })
        }
        
        if (!isValid(data.price)) {
            return res.status(400).send({
                status: false,
                msg: "price is required"
            })
        }

        if (!isValid(data.userId)) {
            return res.status(400).send({
                status: false,
                msg: "userId is required"
            })
        }

        if (!isValidObjectId(data.userId)) {
            return res.status(400).send({
                status: false,
                msg: "userId is not valid"
            })
        }

        if(!await UserModel.findOne({_id:data.userId})){
            return res.status(400).send({
                status: false,
                msg: "userId is not present"
            })
        }

    const saveddata=await BidModel.create(data)
    res.status(201).send({status:true,msg:saveddata})
    }catch(err){
        res.status(500).send({status:false,msg:err.message})
    }
}

module.exports.createBid=createBid
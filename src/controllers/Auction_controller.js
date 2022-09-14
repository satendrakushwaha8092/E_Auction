const AuctionModel=require('../models/Auction_model')

const isValidStatus = function (orderstatus) {
    return ["pending", "completed", "cancled"].indexOf(orderstatus) !== -1
}

const createAuction=async (req,res)=>{
    try{
    const data=req.body
    if (!isValid(data.Name)) {
        return res.status(400).send({
            status: false,
            msg: "name is required"
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
    if (!isValid(data.Items_Array)) {
        return res.status(400).send({
            status: false,
            msg: "Items_Array is required"
        })
    }
    if (!isValid(data.Auction_Status)) {
        return res.status(400).send({
            status: false,
            msg: "Auction_Status is required"
        })
    }
    if (!isValid(data.Start_Time)) {
        return res.status(400).send({
            status: false,
            msg: "Start_Time is required"
        })
    }
    if (!isValid(data.End_Time)) {
        return res.status(400).send({
            status: false,
            msg: "End_Time is required"
        })
    }
    const saveddata=await AuctionModel.create(data)
    res.status(201).send({status:true,msg:saveddata})
    }catch(err){
        res.status(500).send({status:false,msg:err.message})
    }
}

module.exports.createAuction=createAuction
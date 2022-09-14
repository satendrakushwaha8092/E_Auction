const ItemModel = require('../models/Item_model')

const createItem = async (req, res) => {
    try {
        const data = req.body
        if (!isValid(data.name)) {
            return res.status(400).send({
                status: false,
                msg: "name is required"
            })
        }
        if (files && files.length > 0) {
            //upload to s3 and get the uploaded link
            // res.send the link back to frontend/postman
            let uploadedFileURL = await aws.uploadFile(files[0])
            data.profileImage = uploadedFileURL;
        } else {
            return res.status(400).send({ msg: "profileImage is required" })
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
        if (!await UserModel.findOne({ _id: data.userId })) {
            return res.status(400).send({
                status: false,
                msg: "userId is not present"
            })
        }
        const saveddata = await ItemModel.create(data)
        res.status(201).send({ status: true, msg: saveddata })
    } catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}

module.exports.createItem = createItem
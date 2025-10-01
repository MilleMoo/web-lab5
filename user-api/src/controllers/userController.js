const User = require("../models/userModel");
const cloudinary = require("cloudinary").v2

exports.createUser = async (req, res) => {
    try{
        if(!req.file){
            return res.status(400).send({message: "Please upload an image"})
        }

        cloudinary.uploader
            .upload_stream({ resource_type: "image"}, async (error, result) => {
                if(error){
                    return res.status(500).send({ message: "Failed to upload image.", error});
                }

                const newUser = new User({
                    username: req.body.username,
                    email: req.body.email,
                    avatarUrl: result.secure_url,
                    cloudinary_id: result.public_id
                })

                await newUser.save()
                
                res.status(201).json(newUser)
            }).end(req.file.buffer);
    }catch(err){
        res.status(500).send({message: "Server error", err});
    }
}
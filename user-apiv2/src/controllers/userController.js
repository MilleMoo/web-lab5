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

exports.getAllUsers = async (req, res) => {
    try{
        const users = await User.find({});
        res.status(200).json(users) 
    }catch(err){
        res.status(500).send({message: 'Server Error', err});
    }
}

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (req.file) {
            if (user.cloudinary_id) {
                await cloudinary.uploader.destroy(user.cloudinary_id);
            }
            const b64 = Buffer.from(req.file.buffer).toString("base64");
            let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
            const result = await cloudinary.uploader.upload(dataURI, {
                folder: "user_avatars",
            });

            user.avatarUrl = result.secure_url;
            user.cloudinary_id = result.public_id;
        }

        user.username = req.body.username || user.username;
        user.email = req.body.email || user.email;

        const updatedUser = await user.save();
        res.status(200).json({ message: "User updated successfully", user: updatedUser });

    } catch (err) {
        console.error("Error updating user:", err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
};


exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.cloudinary_id) {
            await cloudinary.uploader.destroy(user.cloudinary_id);
        }

        await User.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};
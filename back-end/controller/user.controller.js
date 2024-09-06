import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"

export const signup = async (req , res) => {
    try{
        const {name , email , password} =  req.body
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message : "User already exists"})
        }
        const hashPassword = await bcryptjs.hash(password , 10)
        const createdUser = new User({
            name : name,
            email : email,
            password : hashPassword,
        })
        createdUser.save()
        res.status(201).json({message : "user created successfuly" , user : {
            _id : createdUser._id,
            name : createdUser.name,
            email : createdUser.email
        }})
    }catch(err){
        console.log("Error : "+ err.message)
        res.status(500).json({message : "Interval server error"})
    }
}
export const login = async (req , res) => {
    try{
        const {email , password} = req.body
        const user = await User.findOne({email})
        const isMatch = await bcryptjs.compare(password , user.password)
        if(!user || !isMatch){
            return res.status(400).json({message : "invailed username or password"})
        }else{
            return res.status(200).json({message : "Login successful", user : {
                _id : user._id,
                name : user.name,
                email : user.email
            }})
        }
    }catch(err){
        console.log("Error : " + err)
        res.status(500).json({message : "Internet server error"})
    }
}
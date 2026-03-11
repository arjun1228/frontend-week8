import exp from 'express'
import { UserModel } from '../Models/UserModel.js'

//create mini-server app
export const userRoute = exp()

//USER API routes

// Create User
userRoute.post('/users', async (req, res, next) => {
    //log incoming data for debugging
    console.log('POST /users body', req.body);
    try {
        const newUser = req.body;
        const newUserDoc = new UserModel(newUser);
        await newUserDoc.save();
        //send res
        res.status(201).json({message: "User created", payload: newUserDoc});
    } catch (err) {
        console.error('error creating user:', err);
        // forward to error middleware
        next(err);
    }
});

// Read All users
userRoute.get('/users',async (req,res) => {
   //read all users
   let usersList = await UserModel.find()
   //send res
   res.status(200).json({message:"Users",payload:usersList})
})

//Read user by ID
userRoute.get('/users/:id', async (req,res) => {
    //read user from url
    let uid = req.params.id;
    // find user by id
    let userInDb = await UserModel.findOne({_id:uid,status:true});
    //check user
    if(!userInDb) {
        res.status(404).json({message:"User not found"})
    }
    //send res
    res.status(200).json({message:"User found" , payload:userInDb})
})

//delete user by id
userRoute.delete('/users/:id', async (req,res) => {
    //get the usefrom url
    let uid = req.params.id;
    //find the user by id
    let userInDb = await UserModel.findOne({_id:uid,status:true});
    //if user not found
    if(!userInDb) {
        res.status(404).json({message:'user not found'})
    }
    //save the user
    userInDb.status = false
    await userInDb.save()
    //send res
    res.status(200).json({message:'User Deleted'})
})


//Activate the user (change status to true)
//PUT(complete changes) and PATCH(partial changes)
userRoute.patch('/users/:id', async(req,res) => {
    //get the use from url
    let uid = req.params.id
    //search for the user in DB
    let UserInDB = await UserModel.findByIdAndUpdate(uid, {$set:{status:true}},{new:true})
    //send res
    res.status(200).json({message:'User Activated', payload:UserInDB})
})

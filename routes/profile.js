const express=require('express');
const Profile=require('../models/profileSchema')

const router=express.Router();
router.get('/profile', async(req,res)=>{
    const profile = new Profile({
        name: "Shailee Yadav",
        email: "shaileeyadav130@gmail.com",
        phoneNo: 7348265799,
      });
      await profile.save();
      res.send(profile);
})
module.exports=router;
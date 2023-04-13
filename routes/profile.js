const express=require('express');

const router=express.Router();

const profile = {
    "name": "Shailee Yadav",
    "email": "shaileeyadav130@gmail.com",
    "phoneNo": 7348265799,
  }
router.get('/profile', (req,res)=>{
    res.send(profile);
});
module.exports=router;
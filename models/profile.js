const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const ProfileSchema= new Schema({
    name:String,
    email:String,
    phoneNo:Number,
})

const Profile=mongoose.model('Profile',ProfileSchema);
module.exports=Profile;
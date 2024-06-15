import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "HMS_DEPLOYED"
    }).then(()=>{
        console.log("database connected successfully!!");
    }).catch(err=>{
        console.log(`error occured: ${err}`);
    });
};
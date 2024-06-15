import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM_DEPLOYMENT"
    }).then(()=>{
        console.log("database connected successfully!!");
    }).catch(err=>{
        console.log(`error occured: ${err}`);
    });
};
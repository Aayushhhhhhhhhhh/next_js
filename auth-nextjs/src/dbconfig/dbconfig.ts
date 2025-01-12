import { error } from "console";
import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected', ()=>{
            console.log('Mongodb connected successfully');
        })

        connection.on('error', ()=>{
            console.log('make sure mongo db is running' + error);
            process.exit();
        })

    }
    catch(error){
        console.log('Something went wrong');
        console.log(error);
    }
}
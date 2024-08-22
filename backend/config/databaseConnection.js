import mongoose from 'mongoose';

const uri = 'mongodb+srv://vedantkokanevk:admin@cluster0.mvftljg.mongodb.net/Carbon_FootPrint_Tracker?retryWrites=true&w=majority&appName=Cluster0'


const connectDB = async () =>{
    try{
        const connect = await mongoose.connect(uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('MongoDB Database Connected...');
    }
    catch(error){
        console.error(`Error connecting to MongoDB: ${error.message}`);
    }
}

export {connectDB};
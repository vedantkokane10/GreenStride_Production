import express from "express";
import {connectDB} from './config/databaseConnection.js';
import cors from "cors";    
import authenticationRoutes from './routes/authenticationRoutes.js'
import activityRoutes from './routes/activityRoutes.js'

const app = express();
app.use(cors());

app.use(express.json());

const PORT = 8000;

connectDB();



app.use('/api/authentication/',authenticationRoutes);

app.use('/api/activity/',activityRoutes);

app.listen(PORT,function(){
    console.log("App started at " +PORT);
})
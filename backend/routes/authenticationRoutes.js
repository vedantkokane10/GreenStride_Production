import express from "express";
import {login, register} from "../controllers/AuthController.js";
import {validateToken} from '../middleware/validateTokenHandler.js'
const router = express.Router();

router.get('/',(req,res) =>{
    res.json({'message' : "Authentication api"})
});


router.post('/login',login);

router.post('/register',register);

export default router;
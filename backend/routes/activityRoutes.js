import express from 'express';
import {addActivity, getActivitesByDate,getActivites,getActivitesByCategory,getSuggestions} from '../controllers/ActivityControllerSQL.js';
import {validateToken} from '../middleware/validateTokenHandler.js'
import {getLeaderboard} from '../controllers/LeaderboardControllerSQL.js';
const router = express.Router();

router.get('/',() =>{
    res.json({'message' : "Activity api"})
});


router.get('/getLeaderboard',validateToken,getLeaderboard);

router.post('/addActivity',validateToken,addActivity);

router.get('/getActivities',validateToken,getActivitesByDate);

router.get('/getActivitiesByCategory',validateToken,getActivitesByCategory);
router.get('/getSuggestions',validateToken,getSuggestions);

export default router;
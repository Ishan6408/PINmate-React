const express = require('express');
const router = express.Router();
const {
    getTeams,
    createTeam,
    updateTeam,
    deleteTeam,
} = require('../controllers/teamController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(getTeams).post(protect, createTeam);
router.route('/:id').put(protect, updateTeam).delete(protect, deleteTeam);

module.exports = router;

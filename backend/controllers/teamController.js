const asyncHandler = require('express-async-handler');
const Team = require('../models/Team');

// @desc    Get all teams
// @route   GET /api/teams
// @access  Public
const getTeams = asyncHandler(async (req, res) => {
    const teams = await Team.find().populate('leader', 'name email').populate('members', 'name email');
    res.status(200).json(teams);
});

// @desc    Create a new team
// @route   POST /api/teams
// @access  Private
const createTeam = asyncHandler(async (req, res) => {
    if (!req.body.category || !req.body.description) {
        res.status(400);
        throw new Error('Please add a category and description');
    }

    const team = await Team.create({
        leader: req.user.id,
        category: req.body.category,
        description: req.body.description,
        spotsAvailable: req.body.spotsAvailable,
        members: [req.user.id] // Leader is automatically a member
    });

    res.status(200).json(team);
});

// @desc    Update team
// @route   PUT /api/teams/:id
// @access  Private
const updateTeam = asyncHandler(async (req, res) => {
    const team = await Team.findById(req.params.id);

    if (!team) {
        res.status(404);
        throw new Error('Team not found');
    }

    // Check for user
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    // Make sure the logged in user matches the team leader
    if (team.leader.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    const updatedTeam = await Team.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updatedTeam);
});

// @desc    Delete team
// @route   DELETE /api/teams/:id
// @access  Private
const deleteTeam = asyncHandler(async (req, res) => {
    const team = await Team.findById(req.params.id);

    if (!team) {
        res.status(404);
        throw new Error('Team not found');
    }

    // Check for user
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    // Make sure the logged in user matches the team leader
    if (team.leader.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    await team.deleteOne();

    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getTeams,
    createTeam,
    updateTeam,
    deleteTeam,
};

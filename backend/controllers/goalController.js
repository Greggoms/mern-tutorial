const asyncHandler = require("express-async-handler");

// @desc    Get Goals
// @route   GET/api/v1/goals
// @access  Public
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

// @desc    Set a Goal
// @route   POST/api/v1/goals
// @access  Public
const setGoal = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.text) {
    throw new Error("Please add some text.");
  }
  res.status(200).json({ message: "Set goals" });
});

// @desc    Update a Goal
// @route   PATCH/api/v1/goals/id
// @access  Public
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update a goal" });
});

// @desc    Delete a Goal
// @route   DELETE/api/v1/goals/id
// @access  Public
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Delete a goal" });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };

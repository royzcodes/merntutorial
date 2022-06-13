const asyncHandler = require("express-async-handler");
const Goals = require("../models/index.js");
const base = asyncHandler(async (req, res) => {
  //   const resGoals = await Goals.find();
  const data = {
    name: "AHMAD SUROYYA MUTSADDAD",
    nim: "191240000937",
  };
  res.send(Goals);
});

const setbase = asyncHandler(async (req, res) => {
  if (!req.body["name"]) {
    res.status(400);
    throw new Error("Please Add Field");
  }

  res.status(200).json(req.body);
});

const putbase = asyncHandler(async (req, res) => {
  const data = {
    status: true,
    mesaage: "Update Succesfully",
    id: req.params.id,
  };
  res.send(data);
});

const deletebase = asyncHandler(async (req, res) => {
  const data = {
    status: true,
    mesaage: "Delete Succesfully",
    id: req.params.id,
  };
  res.send(data);
});
module.exports = { base, setbase, putbase, deletebase };

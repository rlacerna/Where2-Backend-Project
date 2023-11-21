const express = require("express");
const router = express.Router();
const Review = require("../models/review");
const User = require("../models/user");

//Index
router.get("/", async (req, res) => {
  try {
    res.json(await Review.find());
  } catch (error) {
    res.status(400).json(error);
  }
}); //Create
router.post("/", async (req, res) => {
  try {
    res.json(await Review.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
}); //Delete

router.delete("/:id", async (req, res) => {
  try {
    res.json(await Review.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
}); //Update
router.put("/:id", async (req, res) => {
  try {
    res.json(
      await Review.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json(error);
  }
}); //Show
router.get("/:id", async (req, res) => {
  try {
    res.json(await Review.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = router;

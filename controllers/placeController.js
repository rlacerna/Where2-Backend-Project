const express = require("express");
const Place = require("../models/place"); // Adjust the path as needed
const router = express.Router();

// INDEX
router.get("/", async (req, res) => {
    try {
        res.json(await Place.find());
    } catch (error) {
        res.status(400).json(error);
    }
});

// CREATE
router.post("/", async (req, res) => {
    try {
        res.json(await Place.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

// SHOW
router.get("/:id", async (req, res) => {
    try {
        res.json(await Place.findById(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

// DELETE
router.delete("/:id", async (req, res) => {
    try {
        res.json(await Place.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

// UPDATE
router.put("/:id", async (req, res) => {
    try {
        res.json(await Place.findByIdAndUpdate(req.params.id, req.body, { new: true }));
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;

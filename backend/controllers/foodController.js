import foodModel from '../models/foodModel.js';
import fs from 'fs';

// add food item
const addFood = async (req, res) => {
    try {
        let image_filename = req.file ? req.file.filename : "";

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename
        });

        await food.save();
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error adding food" });
    }
};

// all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel
            .find({}, { name: 1, description: 1, price: 1, category: 1, image: 1 })
            .lean();

        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error fetching food list" });
    }
};

// remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);

        if (!food) {
            return res.status(404).json({ success: false, message: "Food item not found" });
        }

        if (food.image) {
            fs.unlink(`uploads/${food.image}`, (err) => {
                if (err) {
                    console.log("Image delete error:", err);
                }
            });
        }

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food Removed" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error removing food" });
    }
};

// edit food item
const editFood = async (req, res) => {
    try {
        const { _id, name, category, price, description } = req.body;

        await foodModel.findByIdAndUpdate(_id, {
            name,
            category,
            price,
            description
        });

        res.json({ success: true, message: 'Food updated successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: 'Failed to update food item' });
    }
};

export { addFood, listFood, removeFood, editFood };
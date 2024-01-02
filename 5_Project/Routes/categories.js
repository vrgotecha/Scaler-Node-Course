const express = require("express");


const func = require("joi/lib/types/func");
const router = express.Router();
const {Category, validate} = require("../models/categoriesModel")

// const categories = [
//     {id: 1, name: 'Web'},
//     {id: 2, name: 'Mobile'},
//     {id: 3, name: 'Photography'}
// ]

router.get("/api/categories", async (req, res) => {
  let categories = await Category.find();
  res.send(categories);
});

router.get("/api/categories/:id", async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category)
    return res
      .status(404)
      .send("The category with the given ID was not found.");
  res.send(category);
});

router.post("/api/categories", async (req, res) => {
  const { error } = validate(req.body);
  if (error) res.status(400).send(error.details[0].message);
  const category = new Category({
    name: req.body.name,
  });

  if (!error) await category.save();
  res.send(category);
});

router.put("/api/categories/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) res.status(400).send(error.details[0].message);

  const category = await Category.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );
  if (!category)
    return res
      .status(404)
      .send("The category with the given ID was not found.");

  res.send(category);
});

router.delete("/api/categories/:id", async (req, res) => {
  const category = await Category.findByIdAndDelete(req.params.id);
  if (!category)
    return res
      .status(404)
      .send("The category with the given ID was not found.");

  res.send(category);
});



module.exports = router;

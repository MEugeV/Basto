const { Router } = require("express");
const {
  getCattle,
  createAnimal,
  updateAnimal,
  deleteAnimal,
} = require("../controllers/cattle.controllers.js");

const routes = Router();

routes.get("/", async (req, res, next) => {
  try {
    const cattle = await getCattle();
    res.json(cattle);
  } catch (err) {
    next(err);
  }
});

routes.post("/", async (req, res, next) => {
  try {
    const animal = await createAnimal(req.body);
    res.json(animal);
  } catch (err) {
    next(err);
  }
});

routes.put("/:id", async (req, res, next) => {
  try {
    const animalUpdated = await updateAnimal(req.params.id, req.body);
    res.json(animalUpdated);
  } catch (err) {
    next(err);
  }
});

routes.delete("/:id", async (req, res, next) => {
  try {
    const animalDeleted = await deleteAnimal(req.params.id);
    res.json(animalDeleted);
  } catch (err) {
    next(err);
  }
});

module.exports = routes;

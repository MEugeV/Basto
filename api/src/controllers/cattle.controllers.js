const Cattle = require("../db/cattle.model.js");

module.exports = {
  getCattle: function () {
    const allCattle = Cattle.find();
    return allCattle;
  },

  createAnimal: function (animal) {
    const newAnimal = Cattle.create(animal);
    return newAnimal;
  },

  updateAnimal: function (id, animal) {
    const animalUpdated = Cattle.findByIdAndUpdate(id, animal, {
      new: true,
    });
    return animalUpdated;
  },

  deleteAnimal: function (id) {
    const animalDeleted = Cattle.findByIdAndDelete(id);
    return animalDeleted;
  },
};

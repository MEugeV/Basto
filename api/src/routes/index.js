const { Router } = require("express");
const cattleRoutes = require("./cattle.routes.js");

const router = Router();

router.use("/cattle", cattleRoutes);

module.exports = router;

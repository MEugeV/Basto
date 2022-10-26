const app = require("./app.js");
const mongoose = require("mongoose");

const PORT = 5001;

app.listen(PORT, async () => {
  await mongoose.connect("mongodb://127.0.0.1/basto");
  console.log(`listening at port: ${PORT}`);
});

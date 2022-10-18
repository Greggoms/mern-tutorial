require("dotenv").config();
const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/goals", require("./routes/goalRoutes"));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
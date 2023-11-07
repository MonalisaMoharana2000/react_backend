const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({ origin: "*" }));

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/REACT_BACKEND");

const post_route = require("./routes/postRoutes");
app.use("/api", post_route);

app.listen(8000, () => console.log("Server is running"));

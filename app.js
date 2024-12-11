const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");

const authRoutes = require("./routes/auth"); // auth routes
const characterRoutes = require("./routes/characters"); // characters routes

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: "your-secret-key",
  resave: false,
  saveUninitialized: false,
}));

// Sets view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/auth", authRoutes); // Login, register and logout routes
app.use("/characters", characterRoutes); // all of the charactersheet related routes

// Home Route
app.get("/", (req, res) => {
  res.redirect("/auth/login");
});

// Errors
app.use((req, res, next) => {
  res.status(404).send("Page not found");
});

// handles the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});






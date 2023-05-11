const express = require("express");
const cors = require("cors");
const router = require("./routes/playerRoute", "./routes/gameRoute");
const AppError = require("./utils/appError");
const errorHandler = require("./utils/errorHandler");
const app = express()

//API router middleware
app.use(router);

app.all("*", (req, res, next) => {
 next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
});
app.use(errorHandler);

//Configuration de l'app pour ecouté le port 3000
const PORT = 3000;
app.listen(PORT, () => {
 console.log(`server running on port ${PORT}`);
});

module.exports = app;
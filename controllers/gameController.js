const AppError = require("../utils/appError");
const conn = require("../services/db");

//GET all
exports.getAllGames = (req, res, next) => {
    conn.query("SELECT * FROM gamelist", function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
   };

   //POST
   exports.createGame = (req, res, next) => {
    if (!req.body) return next(new AppError("No form data found", 404));
    const values = [req.body.name, "pending"];
    conn.query(
      "INSERT INTO gamelist (name, status) VALUES(?)",
      [values],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "game added",
        });
      }
    );
   };

   //GET by Id
   exports.getGame = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No game id found", 404));
    }
    conn.query(
      "SELECT * FROM gamelist WHERE id = ?",
      [req.params.id],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(200).json({
          status: "success",
          length: data?.length,
          data: data,
        });
      }
    );
   };

   //PUT
   exports.updateGame = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No game id found", 404));
    }
    conn.query(
      "UPDATE gamelist SET status='completed' WHERE id=?",
      [req.params.id],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "game updated!",
        });
      }
    );
   };

   //DELETE by id
   exports.deleteGame = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No gameid found", 404));
    }
    conn.query(
      "DELETE FROM gamelist WHERE id=?",
      [req.params.id],
      function (err, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "game deleted!",
        });
      }
    );
   }
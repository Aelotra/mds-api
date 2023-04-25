const AppError = require("../utils/appError");
const conn = require("../services/db");

//GET all
exports.getAllPlayers = (req, res, next) => {
    conn.query("SELECT * FROM playerlist", function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
   };

   //POST
   exports.createplayer = (req, res, next) => {
    if (!req.body) return next(new AppError("No form data found", 404));
    const values = [req.body.name, "pending"];
    conn.query(
      "INSERT INTO playerlist (name, status) VALUES(?)",
      [values],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "player created!",
        });
      }
    );
   };

   //GET by Id
   exports.getPlayer = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No player id found", 404));
    }
    conn.query(
      "SELECT * FROM playerlist WHERE id = ?",
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
   exports.updatePlayer = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No player id found", 404));
    }
    conn.query(
      "UPDATE playerlist SET status='completed' WHERE id=?",
      [req.params.id],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "player updated!",
        });
      }
    );
   };

   //DELETE
   exports.deletePlayer = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No todo id found", 404));
    }
    conn.query(
      "DELETE FROM todolist WHERE id=?",
      [req.params.id],
      function (err, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "player deleted!",
        });
      }
    );
   }
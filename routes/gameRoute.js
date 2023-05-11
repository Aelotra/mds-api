const express = require("express");
const controllers = require("../controllers/routeController");
const router = express.Router();

router.route("/game").get(controllers.getAllGames).post(controllers.createGame);
router
 .route("/:id")
 .get(controllers.getPlayer)
 .put(controllers.updatePlayer)
 .delete(controllers.deletePlayer);
module.exports = router;
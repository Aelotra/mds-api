const express = require("express");
const controllers = require("../controllers");
const router = express.Router();

router.route("/player").get(controllers.getAllPlayers).post(controllers.createPlayer);
router
 .route("/:id")
 .get(controllers.getPlayer)
 .put(controllers.updatePlayer)
 .delete(controllers.deletePlayer);
module.exports = router;
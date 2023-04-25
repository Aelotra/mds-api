const express = require("express");
const controllers = require("../controllers");
const router = express.Router();

router.route("/").get(controllers.getAllPlayerss).post(controllers.createPlayer);
router
 .route("/:id")
 .get(controllers.getPlayer)
 .put(controllers.updatePlayer)
 .delete(controllers.deletePlayer);
module.exports = router;
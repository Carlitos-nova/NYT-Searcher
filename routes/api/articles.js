const router = require("express").Router();
const aController = require("../../controllers/Controller");

router.route("/")
  .get(aController.findAll)
  .post(aController.create);

router
  .route("/:id")
  .get(aController.findById)
  .put(aController.update)
  .delete(aController.remove);

module.exports = router;
const { Router } = require("express");
const router = Router();
const authController = require("../controllers/authContoller");

router.post("/signup", authController.register)
router.post("/signin", authController.login)

module.exports = router;
const { Signup, login } = require("../controller/AuthController");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", login);

module.exports = router;
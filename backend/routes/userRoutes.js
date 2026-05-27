const express = require("express");

const { signupUser, loginUser, deleteUser, updateUser } = require("../controllers/userController");

const router = express.Router();

//post user
router.post("/", signupUser);

router.post("/", loginUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

module.exports = router;
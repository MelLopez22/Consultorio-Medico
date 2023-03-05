const express = require("express");
const { check } = require("express-validator");
const { crearUsuario, loginUsuario } = require("../controllers/auth");
const router = express.Router();

router.post("/", [check("name", "el nombre es obigatorio").not().isEmpty() ,
check("mail", "el mail es obigatorio").not().isEmpty() ,
check("password", "password debe tener mas de 5 caracteres").not().isEmpty().isLength({min:5})],

crearUsuario);

router.post("/login",  [
check("mail", "el mail es obigatorio").not().isEmpty() ,
check("password", "password debe tener mas de 5 caracteres").not().isEmpty().isLength({min:5})],loginUsuario);


module.exports = router;

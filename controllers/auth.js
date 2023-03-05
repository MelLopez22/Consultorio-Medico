const express = require("express");
const { validationResult } = require("express-validator");

const crearUsuario = (req, res) => {

    const { name, mail, password } = req.body;

   const errors = validationResult(req);
   if(!errors.isEmpty()){
    return res.json({
        ok:false,
        errors: errors.mapped()
    })
   }


res.json({
    ok: true,
    msg: "Usuario creado con exito",
    datos: {
        name, mail, password
    }
   
  });
 
};

const loginUsuario = (req, res) => {
  

    const errors = validationResult(req);
    if(!errors.isEmpty()){
     return res.json({
         ok:false,
         errors: errors.mapped()
     })
    }
 
    res.json({
        ok: true,
        msg: "Usuario logueado con exito",
      });
};

module.exports = {
  crearUsuario,
  loginUsuario,
};

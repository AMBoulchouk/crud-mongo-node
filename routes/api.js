const express = require('express');
const router = express.Router(); 
const {vista, vistaUn, crear, editar, borrar} = require('../controller/controller.js')
const { check } = require ("express-validator")
const {validarId} = require("../middleware/validarId")


router.get('/ver', vista);
router.get("/ver/:id", vistaUn)
router.post('/crear', [
    check("fullname").not().isEmpty().withMessage("el campo esta vacio").isLength({max:50, min:1}).withMessage("su nombre debe contener al menos 1 letra y menos de 50 caracteres"),
    check("email").not().isEmpty().withMessage("el campo esta vacio").isEmail().withMessage("formato de correo lectronico invalido, ejemplo: example@email.com"),
    check("mobile").not().isEmpty().withMessage("el campo esta vacio").isLength({max:15, min:8}).withMessage("debe contener al menos 8 caracteres").isNumeric().withMessage("Ingrese un valor numerico"),
    check("city").not().isEmpty().withMessage("el campo esta vacio")
], crear);
router.put("/editar/:id", [
    check("fullname").not().isEmpty().withMessage("el campo esta vacio").isLength({max:50, min:1}).withMessage("su nombre debe contener al menos 1 letra y menos de 50 caracteres"),
    check("email").not().isEmpty().withMessage("el campo esta vacio").isEmail().withMessage("formato de correo lectronico invalido, ejemplo: example@email.com"),
    check("mobile").not().isEmpty().withMessage("el campo esta vacio").isLength({max:15, min:8}).withMessage("debe contener al menos 8 caracteres").isNumeric().withMessage("Ingrese un valor numerico"),
    check("city").not().isEmpty().withMessage("el campo esta vacio")
], editar)
router.delete("/eliminar/:id", validarId, borrar)

module.exports = router;
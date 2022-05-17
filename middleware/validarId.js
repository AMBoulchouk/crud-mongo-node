const {Employee} = require("../models/employee")

const validarId = async (req, res, next) => {
    try {
        const employee = await Employee.findById(req.params.id)
        if (employee !== null) {
            next();
        } else {
            res.status(400).json({msg: "El ID ingresado es incorrecto"})
        }
    } catch (error) {
        res.status(400).json({msg: "Verificar ID, formato incorrecto", error})
    }
} 

module.exports = {validarId}
const { json } = require('express/lib/response');
const res = require('express/lib/response');
const {Employee} = require("../models/employee")
const { validationResult } = require ("express-validator")

const inicio = (req, res)=>{
    res.render('index', { title: 'Express' });
}

const vista = async (req, res) => {
    const employee = await Employee.find()
    res.json({employee})
}

const vistaUn = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id)
        res.json({employee}) 
    } catch (error) {
        res.status(400).json({msg: "error con el id", error})
    }
}

const crear = async (req, res)=>{
    const error = validationResult(req)
    try {
        if (error.isEmpty()) {
            const {fullname, email, mobile, city} = req.body
            const employee = new Employee({fullname, email, mobile, city});
            await employee.save()
            res.status(201).json({employee, msg: "Datos del empleado guardados exitosamente"}) 
        } else {
            res.status(501).json(error)
        }
    } catch (err) {
        res.status(501).json({msg: "este empleado ya existe en la base de datos", err})
    }
}

const editar = async (req, res) => {
    const error = validationResult(req)
    if (error.isEmpty()) {
        const {id} = req.params
        const employee = req.body
        await Employee.findByIdAndUpdate(id, req.body)
        res.status(202).json({employee, msg: "Empleado editado exitosamente"}) 
    } else {
        res.status(501).json(error);
    }
} 

const borrar = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id)
        res.json({msg: "Empleado eliminado exitosamente", employee}) 
    } catch (error) {
        res.status(400).json({msg: "problemas a la hora de cargar la informacion"})
    }
} 


module.exports = {inicio, vista, vistaUn, crear, editar, borrar}
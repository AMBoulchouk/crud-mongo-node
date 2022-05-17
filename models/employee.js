const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const employeeSchema = new Schema({
    fullName: {
        type: String,
        required: 'This field is required.',
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,
    }
})

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = {Employee}

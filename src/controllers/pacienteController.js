const mongoose = require('mongoose');
const Paciente = mongoose.model('Paciente');

module.exports = {
    async insert (req, res){
        const pacientes = await Paciente.create(req.body);
        return res.json(pacientes);
    }
}
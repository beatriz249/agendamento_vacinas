const mongoose = require('mongoose');

const Paciente = mongoose.model('Paciente');

module.exports = {
  async insert(req, res) {
    const pacientes = await Paciente.create(req.body);
    return res.json(pacientes);
  },
  async index(req, res) {
    const { page } = req.query;

    // Limitando a quantidade de dados a serem exibidos na página de agendamentos
    const pacientes = await Paciente.paginate({}, { page, limit: 5 });

    return res.json(pacientes);
  },
  async details(req, res) {
    const pacientes = await Paciente.findById(req.params.id);

    return res.json(pacientes);
  },
  async update(req, res) {
    const pacientes = await Paciente.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(pacientes);
  },
  async delete(req, res) {
    // eslint-disable-next-line no-unused-vars
    const pacientes = await Paciente.findByIdAndRemove(req.params.id);

    return res.send();
  },
};

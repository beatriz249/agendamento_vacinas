const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate')

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        uppercase: true,
        minlength: 7,
        maxlength: 100
    },
    dataNasc: {
        type: Date,
        required: true
    },
    atendido: {
        type: Boolean,
        default: false
    },
    comentario: {
        type: String,
        maxlength: 120,
    },
    agendamento: {
        type: Date
    }

});

UserSchema.plugin(mongoosePaginate);

mongoose.model('Paciente', UserSchema);


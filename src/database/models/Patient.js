const { Schema, model } = require('mongoose');

const patientSchema = new Schema({
	name: { type: 'string', required: true },
    bloodGroup: 'string',
});

const patient = model('Patient', patientSchema);

module.exports = patient;
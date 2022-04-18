const { Schema, model } = require('mongoose');

const bloodBanSchema = new Schema({
    name: { type: 'string', required: true },
    city: 'string',
    contact: 'string',
    donors: [{ type: Schema.Types.ObjectId, ref: 'Donor' }],
});

const bloodBank = model('BloodBank', bloodBanSchema);


module.exports = bloodBank;
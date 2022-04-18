const { Schema, model } = require('mongoose')

const donorSchema = new Schema({
    name: { type: 'string', required: true },
    bloodGroup: 'string',
    bloodBank: { type: Schema.Types.ObjectId, ref: 'BloodBank' },
    contact: 'string',
})

const donor = model('Donor', donorSchema)


module.exports = donor
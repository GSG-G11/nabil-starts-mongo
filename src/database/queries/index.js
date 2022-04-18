const Patient = require('../models/Patient');
const donor = require('../models/Donor');
const bloodBank = require('../models/Bank');

const findPatients = () => Patient.find();
const findDonors = () => donor.find();
const findBB = () => bloodBank.find();

const createPatient = ({ name, bloodGroup }) => Patient.create({ name, bloodGroup });
const createDonor = ({ name, bloodGroup, bloodBank, contact }) => donor.create({ name, bloodGroup, bloodBank, contact });
const createBB = ({ name, city, contact }) => bloodBank.create({ name, city, contact });

module.exports = {
  findPatients,
  findDonors,
  findBB,
  createPatient,
  createDonor,
  createBB,
};

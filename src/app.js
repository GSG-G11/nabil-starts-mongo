const express = require('express');
const app = express();
const {
  findPatients,
  findDonors,
  findBB,
  createPatient,
  createDonor,
  createBB,
} = require('./database/queries');



app.set('port', process.env.PORT || 3000);

app.use[(express.json(), express.urlencoded({ extended: true }))];

app.get('/patients', async (req, res) => {
    const patients = await findPatients();
    res.json(patients);
 
});

app.post('/patients', async (req, res) => {
    const patients = await createPatient(req.body);
    res.json(patients);
});

app.get('/donors', async(req, res) => {
    const donors = await findDonors();
    res.json(donors);});

app.post('/donors', async(req, res) => {
    const donors = await createDonor(req.body);
    res.json(donors);});

app.get('/blood-banks', async(req, res) => {
    const bb = await findBB();
    res.json(bb);});

app.post('/blood-banks', async(req, res) => {
    const bb = await createBB(req.body);
    res.json(bb);});

module.exports = app;

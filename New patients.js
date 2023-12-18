
const express = require("express");
const bodyPaser =require('body-parser')
const app = express();
const patient=[];
let patientID=0;


app.post("/Newpatients", async (req, res) => {
  const {
    patientId,
    surname,
    othernames,
    gender,
    phoneNumber,
    residentialAddress,
    emergencyName,
    emergencyContact,
    relationship,
  } = req.body;

  try {
    const patient = new Patient({
      patientId,
      surname,
      othernames,
      gender,
      phoneNumber,
      residentialAddress,
      emergencyContact: {
        name: emergencyName,
        contact: emergencyContact,
        relationship,
      },
    });

    await patient.save();

    res.json({ message: "Patient registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
const db = require("../models");

const getAllPersons = async (req, res) => {
  const allPersons = await db.Person.findAll();
  res.status(200).send(allPersons);
};

const getPersonById = async (req, res) => {
  const targetId = req.params.id;
  const targetPerson = await db.Person.findOne({ where: { id: targetId } });
  res.status(200).send(targetPerson);
};

const createPerson = async (req, res) => {
  const { name, age } = req.body;
  const newPerson = await db.Person.create({ name, age });
  res.status(201).send(newPerson);
};

const updatePerson = async (req, res) => {
  const { name, age } = req.body;
  const targetId = req.params.id;
  const targetPerson = await db.Person.findOne({ where: { id: targetId } });

  if (targetPerson) {
    await targetPerson.update({ name, age });
    res.status(200).send({ message: "Updated" });
  } else {
    res.status(404).send();
  }
};

const deletePerson = async (req, res) => {
  const targetId = req.params.id;
  const targetPerson = await db.Person.findOne({ where: { id: targetId } });

  if (targetPerson) {
    await targetPerson.destroy();
    res.status(204).send();
  } else {
    res.status(404).send();
  }
};

module.exports = {
  getAllPersons,
  getPersonById,
  createPerson,
  updatePerson,
  deletePerson,
};
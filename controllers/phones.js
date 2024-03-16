const mongodb = require("../database/");
const ObjectId = require("mongodb").ObjectId;

getAll = async (req, res) => {
  const result = await mongodb
    .getDb()
    .db()
    .collection("phones")
    .find();
  result.toArray().then((phones) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(phones);
  });
};

getSingle = async (req, res) => {
  const phoneId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection("phones")
    .find({ _id: phoneId });
  result.toArray().then((phones) => {
    if(phones[0]){
        res.setHeader("Content-Type", "application/json");
    res.status(200).json(phones[0]);
    } else{
        res.status(404).json('Unable to find resource')
    }
  });
};

createPhone = async (req, res) => {
  const phone = {
    manufacture: req.body.manufacture,
    model: req.body.model,
    release: req.body.release,
    processorCores: req.body.processorCores,
    processorGHz: req.body.processorGHz,
    storage: req.body.storage,
    memory: req.body.memory,
    screen: req.body.screen,
    cameras: req.body.cameras,
    os: req.body.os,
    osVersion: req.body.osVersion
  };
  const response = await mongodb.getDb().db().collection('phones').insertOne(phone)
  if (response.acknowledged) {
    res.status(201).send()
  } else {
    res.status(500).json(response || 'Some error occured while trying to create phone.')
  }
};

updatePhone = async (req, res) => {
  const phoneId = new ObjectId(req.params.id);
  const phone = {
    manufacture: req.body.manufacture,
    model: req.body.model,
    release: req.body.release,
    processorCores: req.body.processorCores,
    processorGHz: req.body.processorGHz,
    storage: req.body.storage,
    memory: req.body.memory,
    screen: req.body.screen,
    cameras: req.body.cameras,
    os: req.body.os,
    osVersion: req.body.osVersion
  };
  const response = await mongodb.getDb().db().collection('phones').replaceOne({_id: phoneId}, phone)
  if (response.modifiedCount > 0) {
    res.status(204).send()
  } else {
    res.status(500).json(response.error || 'Some error occured while trying to update phone.')
  }
};

deletePhone = async (req, res) => {
  const phoneId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db().collection('phones').deleteOne({_id: phoneId})
  if (response.deletedCount > 0) {
    res.status(200).send()
  } else {
    res.status(500).json(response || 'Some error occured while trying to delete phone.')}
};

module.exports = {
  getAll,
  getSingle,
  createPhone,
  updatePhone,
  deletePhone,
};

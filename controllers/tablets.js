const mongodb = require("../database/");
const ObjectId = require("mongodb").ObjectId;

getAll = async (req, res) => {
  const result = await mongodb
    .getDb()
    .db()
    .collection("tablets")
    .find();
  result.toArray().then((tablets) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(tablets);
  });
};

getSingle = async (req, res) => {
  const tabletId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection("tablets")
    .find({ _id: tabletId });
  result.toArray().then((tablets) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(tablets[0]);
  });
};

createTablet = async (req, res) => {
  const tablet = {
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
  const response = await mongodb.getDb().db().collection('tablets').insertOne(tablet)
  if (response.acknowledged) {
    res.status(201).send()
  } else {
    res.status(500).json(response || 'Some error occured while trying to create tablet.')
  }
};

updateTablet = async (req, res) => {
  const tabletId = new ObjectId(req.params.id);
  const tablet = {
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
  const response = await mongodb.getDb().db().collection('tablets').replaceOne({_id: tabletId}, tablet)
  if (response.modifiedCount > 0) {
    res.status(204).send()
  } else {
    res.status(500).json(response.error || 'Some error occured while trying to update tablet.')
  }
};

deleteTablet = async (req, res) => {
  const tabletId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db().collection('tablets').deleteOne({_id: tabletId})
  if (response.deletedCount > 0) {
    res.status(200).send()
  } else {
    res.status(500).json(response || 'Some error occured while trying to delete tablet.')}
};

module.exports = {
  getAll,
  getSingle,
  createTablet,
  updateTablet,
  deleteTablet,
};

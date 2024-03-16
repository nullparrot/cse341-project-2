const Validator = require('validatejs');
const validator = (body, rules, customMessages, callback) => {
    const validation = new Validator(bosy, rules, customMessages);
    validation.passes(() => callback(null, true));
    validation.fails(() => callback(validation.errors, false));
};

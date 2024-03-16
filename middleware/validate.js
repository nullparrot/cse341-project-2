const validator = require('../utilities/validate');

// Content below as example use case

const saveDevice = (req, res, next) => {
    const validationRule = {
      manuf: 'required|string',
      lastName: 'required|string',
      email: 'required|email',
      favoriteColor: 'required|string',
      birthday: 'string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
      if (!status) {
        res.status(412).send({
          success: false,
          message: 'Validation failed',
          data: err
        });
      } else {
        next();
      }
    });
  };
  
  module.exports = {
    saveContact
  };
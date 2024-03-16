const validator = require("../utilities/validate");

const saveDevice = (req, res, next) => {
    const validationRule = {
        manufacture: "required|string",
        model: "required|string",
        release: "required|integer",
        processorCores: "required",
        processorGHz: "required",
        storage: "required|integer",
        memory: "required|integer",
        screen: "required",
        cameras: "required",
        os: "required|string",
        osVersion: "required|numeric"
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: "Validation failed",
                data: err
            });
        } else {
            next();
        }
    });
};

module.exports = {
    saveDevice,
};

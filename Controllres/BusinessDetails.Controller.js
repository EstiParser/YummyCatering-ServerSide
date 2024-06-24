const BusinessDetails = require('../models/BusinessDetails');
const Orders = require('../models/Orders');

// Business Details
const updateDetails = async (req, res) => {
    const newDetails = new BusinessDetails(req.body);
    await newDetails.save();
    res.status(200).json({ message: 'The details have been successfully updated', newDetails });
};

const getDetails = async (req, res) => {
    const details = await BusinessDetails.find();
    res.status(200).json(details);
};


module.exports = {
    updateDetails,
    getDetails
};

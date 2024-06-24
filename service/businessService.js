const business = require('../models/BusinessDetails');


const getDetails = async () => {
    const details = await business.find();
    return details;
};

const updateDetails = async (id, update) => {
    const updatedDetails = await business.findByIdAndUpdate(id, update, { new: true, runValidators: true });
    return updatedDetails;
};



module.exports = {
    getDetails,
    updateDetails
    
};
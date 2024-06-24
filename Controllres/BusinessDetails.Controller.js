const businessService = require('../service/businessService');



const getDetails = async (req, res) => {
    try {
        const details = await businessService.getDetails();
        res.status(200).json(details);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching details', error });
    }
};

// Business Details
const updateDetails = async (req, res) => {
    try {
        const id = req.body.id;
        const update = req.body;
        const updatedDetails = await businessService.updateDetails(id, update);
        if (updatedDetails) {
            res.status(200).json({ message: 'The details have been successfully updated', updatedDetails });
        } else {
            res.status(404).json({ message: 'Details not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating details', error });
    }
};

module.exports = {
    getDetails,
    updateDetails
   
};
const FlowDistribution = require('../Service/flowDistributionService');
const User = require('../Model/userModel');
const logger = require('../Config/logger');

const flowDistribution = new FlowDistribution();

exports.allocateUser = async (req, res) => {
    const { name } = req.body;
    try {
        const user = new User({ name });
        await user.save();
        flowDistribution.allocateUserToAstrologer(user);
        logger.info(`User '${name}' allocated successfully`);
        res.status(200).json({ message: 'User allocated successfully' });
    } catch (err) {
        logger.error(`Error allocating user: ${err.message}`);
        res.status(500).json({ error: 'Internal server error' });
    }
};

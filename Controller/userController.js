const User = require('../Model/userModel');
const logger = require('../Config/logger');

exports.addUser = async (req, res) => {
    const { name } = req.body;
    try {
        const user = new User({ name });
        await user.save();
        logger.info(`User '${name}' added successfully`);
        res.status(201).json({ message: 'User added successfully' });
    } catch (err) {
        logger.error(`Error adding user: ${err.message}`);
        res.status(500).json({ error: 'Internal server error' });
    }
};

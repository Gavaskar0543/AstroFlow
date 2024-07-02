const Astrologer = require('../models/astrologerModel');
const logger = require('../config/logger');

exports.addAstrologer = async (req, res) => {
    const { name, isTopAstrologer } = req.body;
    try {
        const astrologer = new Astrologer({ name, isTopAstrologer });
        await astrologer.save();
        logger.info(`Astrologer '${name}' added successfully`);
        res.status(201).json({ message: 'Astrologer added successfully' });
    } catch (err) {
        logger.error(`Error adding astrologer: ${err.message}`);
        res.status(500).json({ error: 'Internal server error' });
    }
};

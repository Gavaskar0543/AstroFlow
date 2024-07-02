const express = require('express');
const connectDB = require('./config/db');
const astrologerRoutes = require('./routes/astrologerRoutes');
const userRoutes = require('./routes/userRoutes');
const allocationRoutes = require('./routes/allocationRoutes');
const logger = require('./config/logger');

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
    logger.info(`Server running on http://localhost:${port}`);
});

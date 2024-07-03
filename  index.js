const express = require('express');
const DB = require('./Config/database');
const logger = require('./Config/logger');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/',require('./Router'));
app.listen(port, () => {
    logger.info(`Server running on http://localhost:${port}`);
});

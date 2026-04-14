import 'dotenv/config'
import app from './app.js';
import { logger } from './utils/logger.js';

//TODO: make env typed
const PORT = process.env.PORT || 3000
const URL = process.env.SERVER_LINK || "http://localhost"

app.listen(PORT, () => {
    logger.info(`Server running on ${URL}:${PORT}`);
});
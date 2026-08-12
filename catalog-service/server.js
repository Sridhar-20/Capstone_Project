/**
 * ==========================================================
 * Cake Delight
 * Catalog Microservice
 * ----------------------------------------------------------
 * Application Entry Point
 *
 * Responsible for:
 * - Loading environment variables
 * - Connecting to MongoDB
 * - Seeding initial cake data when required
 * - Starting the Express server
 *
 * Author : Bhukya Sridhar
 * ==========================================================
 */

require("dotenv").config();

const app = require("./src/app");
const connectDatabase = require("./src/config/database");
const seedCakes = require("./src/seed/cakeSeeder");

const PORT = process.env.PORT || 5001;

/**
 * Starts the Catalog Service.
 */
const startServer = async () => {
    try {
        // Connect to MongoDB.
        await connectDatabase();

        // Seed initial cakes when the database is empty.
        await seedCakes();

        // Start the Express server.
        app.listen(PORT, () => {
            console.log(
                `🚀 Catalog Service is running on port ${PORT}`
            );
        });

    } catch (error) {
        console.error("❌ Failed to start Catalog Service");
        console.error(`Error: ${error.message}`);

        process.exit(1);
    }
};

startServer();
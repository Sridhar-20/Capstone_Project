/**
 * ==========================================================
 * Cake Delight
 * Catalog Microservice
 * ----------------------------------------------------------
 * Initial Cake Data Seeder
 *
 * Inserts default cakes when the Catalog database is empty.
 * The seeder is idempotent:
 * - Empty database  -> inserts initial cakes
 * - Existing cakes  -> skips seeding
 *
 * Author : Bhukya Sridhar
 * ==========================================================
 */

const Cake = require("../models/Cake");

/**
 * Initial cakes available for the application.
 */
const initialCakes = [
    {
        name: "Chocolate Truffle Cake",
        description: "Rich and creamy chocolate truffle cake",
        category: "Chocolate",
        price: 950,
        stock: 15,
        imageUrl: "",
        isAvailable: true
    },
    {
        name: "Red Velvet Cake",
        description: "Soft red velvet cake layered with creamy cheese frosting",
        category: "Birthday",
        price: 777,
        stock: 15,
        imageUrl: "",
        isAvailable: true
    },
    {
        name: "Black Forest Cake",
        description: "Classic chocolate cake with cherries and whipped cream",
        category: "Chocolate",
        price: 850,
        stock: 15,
        imageUrl: "",
        isAvailable: true
    },
    {
        name: "Chocolate Fudge Cake",
        description: "Rich and moist chocolate fudge cake covered with chocolate ganache",
        category: "Chocolate",
        price: 950,
        stock: 15,
        imageUrl: "",
        isAvailable: true
    },
    {
        name: "Butterscotch Cake",
        description: "Delicious butterscotch cake topped with caramel and crunchy nuts",
        category: "Special",
        price: 750,
        stock: 12,
        imageUrl: "",
        isAvailable: true
    },
    {
        name: "Strawberry Cake",
        description: "Fresh strawberry cake with creamy frosting and strawberry filling",
        category: "Fruit",
        price: 800,
        stock: 10,
        imageUrl: "",
        isAvailable: true
    },
    {
        name: "Vanilla Cream Cake",
        description: "Light vanilla sponge cake with smooth cream frosting",
        category: "Birthday",
        price: 650,
        stock: 12,
        imageUrl: "",
        isAvailable: true
    },
    {
        name: "Pineapple Cake",
        description: "Fresh pineapple cake with juicy pineapple pieces and whipped cream",
        category: "Fruit",
        price: 700,
        stock: 18,
        imageUrl: "",
        isAvailable: true
    },
    {
        name: "Chocolate Truffle Premium",
        description: "Premium chocolate truffle cake with rich chocolate layers and smooth ganache",
        category: "Chocolate",
        price: 1100,
        stock: 10,
        imageUrl: "",
        isAvailable: true
    },
    {
        name: "Mango Cake",
        description: "Fresh mango cake made with soft sponge, mango cream and juicy mango pieces",
        category: "Fruit",
        price: 850,
        stock: 10,
        imageUrl: "",
        isAvailable: true
    },
    {
        name: "Black Forest Deluxe",
        description: "Premium black forest cake with extra chocolate shavings and cherries",
        category: "Special",
        price: 1200,
        stock: 12,
        imageUrl: "",
        isAvailable: true
    }
];

/**
 * Seeds the initial cakes if the cakes collection is empty.
 *
 * This function does not delete or overwrite existing data.
 */
const seedCakes = async () => {
    try {
        const existingCakeCount = await Cake.countDocuments();

        if (existingCakeCount > 0) {
            console.log(
                `ℹ️ Catalog already contains ${existingCakeCount} cake(s). Skipping seed data.`
            );
            return;
        }

        await Cake.insertMany(initialCakes);

        console.log(
            `🌱 Successfully seeded ${initialCakes.length} cakes into Catalog MongoDB.`
        );
    } catch (error) {
        console.error("❌ Failed to seed catalog data");
        console.error(`Error: ${error.message}`);

        throw error;
    }
};

module.exports = seedCakes;
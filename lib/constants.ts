const BRAND_NAME = "luxury LRP cosmetics"; // Brand name for the cosmetics line

// Define colors used throughout the application
const COLORS = {
    PRIMARY: "#FFA500", // Orange
    SECONDARY: "#FFFFFF", // White
};

// Define configuration settings for the luxury LRP cosmetics application
const CONFIG = {
    API_URL: "https://api.luxurylrpcosmetics.com", // Base URL for the API
    TIMEOUT: 5000, // Timeout for API requests in milliseconds
};

// Define types and interfaces for the application
interface Product {
    id: string; // Unique identifier for the product
    name: string; // Name of the product
    description: string; // Detailed description of the product
    price: number; // Price of the product
    category: string; // Category of the product (e.g., skincare, makeup)
    imageUrl: string; // URL of the product image
    isFeatured: boolean; // Indicates if the product is featured
}

interface CartItem {
    productId: string; // ID of the product in the cart
    quantity: number; // Quantity of the product
}

interface User {
    id: string; // Unique identifier for the user
    name: string; // Full name of the user
    email: string; // Email address of the user
    password: string; // Password for user authentication
}

// Export constants and types for use in the application
export { BRAND_NAME, COLORS, CONFIG, Product, CartItem, User };
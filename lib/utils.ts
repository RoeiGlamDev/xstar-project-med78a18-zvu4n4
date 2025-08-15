import { formatCurrency } from './formatters';

/
 * Utility functions for luxury LRP cosmetics application
 * This file contains helper functions and types used throughout the luxury LRP cosmetics website.
 */

/
 * Interface representing a product in the luxury LRP cosmetics line.
 */
export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    category: string;
    imageUrl: string;
}

/
 * Function to generate a formatted price string for luxury LRP cosmetics products.
 * @param price - The price of the product.
 * @returns A string representing the formatted price with luxury branding.
 */
export function formatProductPrice(price: number): string {
    return formatCurrency(price, 'USD', 'luxury LRP cosmetics');
}

/
 * Utility function to create a class name string for conditional styling.
 * @param base - The base class name.
 * @param condition - An optional condition to apply additional classes.
 * @returns A string of concatenated class names.
 */
export function cn(base: string, condition?: string): string {
    return condition ? ${base} ${condition} : base;
}

/
 * Function to generate a product description that aligns with luxury LRP cosmetics branding.
 * @param product - The product object containing details of the product.
 * @returns A string that emphasizes the luxury and quality of the product.
 */
export function generateLuxuryDescription(product: Product): string {
    return ${product.name} - Indulge in the exquisite allure of ${product.description}. 
    Elevate your beauty regimen with our premium line of cosmetics, crafted to perfection. 
    Experience the luxury that is synonymous with luxury LRP cosmetics.;
}

/
 * Utility function to create a 3D effect style for luxury LRP cosmetics branding.
 * @param depth - The depth of the 3D effect.
 * @returns A string representing the CSS style for 3D effect.
 */
export function create3DEffect(depth: number): string {
    return 
    transform: translateZ(${depth}px);
    box-shadow: 0 ${depth}px ${depth * 2}px rgba(255, 165, 0, 0.5);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    ;
}

/
 * Example of a cosmetics product
 */
const exampleProduct: Product = {
    id: '001',
    name: 'Luxury Lipstick',
    price: 35.00,
    description: 'A rich, creamy lipstick that provides luscious color and hydration.',
    category: 'Lip Care',
    imageUrl: 'https://www.example.com/images/luxury-lipstick.png',
};

// Exporting the example product for use in other parts of the application
export const sampleProducts: Product[] = [exampleProduct];
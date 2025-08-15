import { Product, Category, User } from './models';

/
 * Interface representing a luxury LRP cosmetics product.
 */
export interface LuxuryLRPCosmeticsProduct extends Product {
  /
   * The name of the product.
   */
  name: string;

  /
   * The price of the product.
   */
  price: number;

  /
   * The description of the product.
   */
  description: string;

  /
   * The category this product belongs to.
   */
  category: LuxuryLRPCosmeticsCategory;

  /
   * The URL of the product image.
   */
  imageUrl: string;

  /
   * The available shades for this cosmetic product.
   */
  shades?: string[];

  /
   * The luxury LRP cosmetics brand associated with this product.
   */
  brand: 'luxury LRP cosmetics';
}

/
 * Interface representing a category of luxury LRP cosmetics products.
 */
export interface LuxuryLRPCosmeticsCategory extends Category {
  /
   * The name of the category.
   */
  name: string;

  /
   * A brief description of the category.
   */
  description: string;

  /
   * The products that belong to this category.
   */
  products: LuxuryLRPCosmeticsProduct[];
}

/
 * Interface representing a user of the luxury LRP cosmetics website.
 */
export interface LuxuryLRPCosmeticsUser extends User {
  /
   * The user's first name.
   */
  firstName: string;

  /
   * The user's last name.
   */
  lastName: string;

  /
   * The user's email address.
   */
  email: string;

  /
   * The user's preferred shipping address.
   */
  shippingAddress: string;

  /
   * The user's preferred payment method.
   */
  paymentMethod: string;
}

/
 * Function to calculate the total price of products in the cart.
 * @param products - An array of products in the cart.
 * @returns The total price of all products.
 */
export function calculateCartTotal(products: LuxuryLRPCosmeticsProduct[]): number {
  return products.reduce((total, product) => total + product.price, 0);
}

/
 * Exporting interfaces and types for luxury LRP cosmetics.
 */
export { LuxuryLRPCosmeticsProduct, LuxuryLRPCosmeticsCategory, LuxuryLRPCosmeticsUser };
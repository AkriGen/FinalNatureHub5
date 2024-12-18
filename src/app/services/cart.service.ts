import { Injectable } from '@angular/core';
import { ToastrServiceWrapper } from '../toastr.service';
import { ProductService } from './product.service';

export interface Product {
  ProductId: number;
  ProductName: string;
  ProductImage: string;
  Price: number;
  Description: string;
  StockQuantity: number;
  CategoryId: number;
  category: 'skin' | 'immunity' | 'digestion' | 'body' | 'hair';
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: { product: Product; quantity: number }[] = [];

  constructor(private toastr:ToastrServiceWrapper, private productService:ProductService) {
    // Try to load cart from localStorage if available
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
    }
  }

  addToCart(product: Product) {
    if (product.StockQuantity <= 0) {
      this.toastr.warning(`${product.ProductName} is out of stock.`);
      return;
    }
  
    const existingProduct = this.cartItems.find(item => item.product.ProductId === product.ProductId);
  
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
  
    product.StockQuantity -= 1;
    this.productService.updateProductStock(product.ProductId, product.StockQuantity).subscribe(
      () => {
        console.log(`Stock updated successfully for ${product.ProductName}`);
      },
      (error) => {
        console.error(`Failed to update stock for ${product.ProductName}:`, error);
      }
    );
  
    this.saveCart();
  }
    
  

  // Method to get the current cart items
  getCartItems() {
    return this.cartItems;
  }

  // Update the quantity of a product in the cart
  updateQuantity(productId: number, quantity: number) {
    const product = this.cartItems.find(item => item.product.ProductId === productId);
  
    if (product) {
      // Ensure quantity does not exceed stock
      if (quantity > product.product.StockQuantity) {
        alert(`Cannot update quantity. Stock is insufficient! Only ${product.product.StockQuantity} left.`);
      } else if (quantity >= 1) {
        product.quantity = quantity;
        this.saveCart();  // Save cart after updating
      }
    }
  }
  
  
  // Method to save the cart to localStorage
  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));  // Save to localStorage
  }

  // Remove a product from the cart
  removeItem(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.product.ProductId !== productId);
    this.saveCart();  // Save after removing the item
  }

  // Get the total cost of items in the cart
  getCartTotal() {
    return this.cartItems.reduce((total, item) => total + item.product.Price * item.quantity, 0);
  }

  // Clear all items in the cart
  clearCart() {
    this.cartItems = [];
    this.saveCart();  // Save after clearing
  }
}
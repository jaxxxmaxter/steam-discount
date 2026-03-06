/**
 * Steam Game Data Types
 */

export interface Game {
  id: string;
  name: string;
  coverImage: string;
  originalPrice: number;    // Original price in cents
  currentPrice: number;    // Current price in cents
  discountPercent: number; // Discount percentage (0-100)
  lowestPrice: number;     // Historical lowest price in cents
  isLowestEver: boolean;    // Is this the lowest price ever?
  releaseDate: string;      // Release date ISO string
  rating: number;          // Positive rating percentage (0-100)
  reviewCount: number;     // Number of reviews
  genres: string[];        // Game genres
  platforms: string[];      // Available platforms
  steamUrl: string;         // Steam store URL
}

export interface SaleEvent {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  isActive: boolean;
}

export interface GameFilters {
  minDiscount?: number;
  maxPrice?: number;
  genres?: string[];
  platforms?: string[];
  onlyLowestEver?: boolean;
}

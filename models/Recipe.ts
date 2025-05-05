export type RecipeCategory = 'breakfast' | 'lunch' | 'dinner' | 'dessert' | 'vegetarian' | 'protein' | 'salad' | 'fish';

export type RecipeDifficulty = 'easy' | 'medium' | 'hard';

export interface Recipe {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  ingredients: string[];
  instructions: string[];
  prepTime: number; // dakika
  cookTime: number; // dakika
  servings: number;
  calories: number;
  category: RecipeCategory;
  difficulty: RecipeDifficulty;
  tags: string[];
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface RecipeFormData {
  name: string;
  description: string;
  imageUrl: string;
  ingredients: string[];
  instructions: string[];
  prepTime: number;
  cookTime: number;
  servings: number;
  calories: number;
  category: RecipeCategory;
  difficulty: RecipeDifficulty;
  tags: string[];
} 
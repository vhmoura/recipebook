import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('carne de porco no forno', 'carne de porco assada no forno com molho bbq', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg', [new Ingredient('carne de porco', 1), new Ingredient('porção de salada', 1)]),
        
        new Recipe('almoço saudável', 'receita de almoço saudavel com frango e batata frita', 'https://get.pxhere.com/photo/restaurant-dish-meal-food-salad-vegetable-plate-seafood-kitchen-recipe-snack-eat-fast-food-lunch-cuisine-chicken-rice-broccoli-asian-food-garnish-dinner-vegetarian-food-potatoes-junk-food-thai-food-side-dish-diet-food-leaf-vegetable-1375811.jpg', [new Ingredient('chicken filet', 1), 
        new Ingredient('tomate', 1), new Ingredient('french fries', 1), new Ingredient('rice', 1)])
      ];

      recipeSelected = new EventEmitter<Recipe>();
     constructor (private slService: ShoppingListService){

     }

      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}
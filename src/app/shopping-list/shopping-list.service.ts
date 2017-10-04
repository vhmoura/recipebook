import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
    ingredietsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('tomatoes', 10)
      ];

      getIngredients() {
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient) {
          this.ingredients.push(ingredient);
          this.ingredietsChanged.emit(this.ingredients.slice());
      }

      addIngredients(ingr: Ingredient[]) {
        this.ingredients.push(...ingr);
        this.ingredietsChanged.emit(this.ingredients.slice());
    }      

}
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {
    ingredietsChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('tomatoes', 10)
      ];

      getIngredients() {
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient) {
          this.ingredients.push(ingredient);
          this.ingredietsChanged.next(this.ingredients.slice());
      }

      addIngredients(ingr: Ingredient[]) {
        this.ingredients.push(...ingr);
        this.ingredietsChanged.next(this.ingredients.slice());
    }      

}
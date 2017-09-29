import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('carne de porco no forno', 'carne de porco assada no forno com molho bbq', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'),
    new Recipe('almoço saudável', 'receita de almoço saudavel com frango e batata frita', 'https://get.pxhere.com/photo/restaurant-dish-meal-food-salad-vegetable-plate-seafood-kitchen-recipe-snack-eat-fast-food-lunch-cuisine-chicken-rice-broccoli-asian-food-garnish-dinner-vegetarian-food-potatoes-junk-food-thai-food-side-dish-diet-food-leaf-vegetable-1375811.jpg')
  ];

  

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  } 

}

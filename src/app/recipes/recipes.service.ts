import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";


export class RecipeService {

    recipeSelected=new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('samosa','an indian snack','https://c.ndtvimg.com/2023-03/0m65kep_samosa_625x300_10_March_23.jpg')
      ];
    
    getRecipes(){
        return this.recipes.slice();
    }
}
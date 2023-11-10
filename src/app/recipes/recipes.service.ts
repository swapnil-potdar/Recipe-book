import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    recipeSelected=new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('samosa',
        'an indian snack',
        'https://c.ndtvimg.com/2023-03/0m65kep_samosa_625x300_10_March_23.jpg',
        [
            new Ingredient('potatoes',1),
            new Ingredient('sauce',2),
        ])
      ];

    constructor(private slService: ShoppingListService){}  
    
    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients : Ingredient[]){
        this.slService.addIngredients(ingredients);

    }
}
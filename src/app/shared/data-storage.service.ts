import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable({providedIn:'root'})
export class DataStorageService{
    constructor(private http: HttpClient, private recipeService: RecipeService){ }


    storeRecipes(){
        const recipes=this.recipeService.getRecipes;

        this.http.put('https://recipe-book-ab01c-default-rtdb.firebaseio.com/recipe-book.json',recipes)
        .subscribe(response=>{
            console.log(response);
        });
    }

    fetchRecepies(){
        this.http.get<Recipe[]>('https://recipe-book-ab01c-default-rtdb.firebaseio.com/recipe-book.json')
        .subscribe(recipes=>{
            this.recipeService.setRecipes(recipes);
        })

    }
}
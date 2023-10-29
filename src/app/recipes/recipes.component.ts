import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  selectedRecipe: Recipe;

  constructor() { }

}


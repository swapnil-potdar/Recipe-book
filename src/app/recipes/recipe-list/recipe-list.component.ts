import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('samosa','an indian snack','https://c.ndtvimg.com/2023-03/0m65kep_samosa_625x300_10_March_23.jpg')
  ];

  constructor() {

  }

  ngOnInit(): void {

  }

}

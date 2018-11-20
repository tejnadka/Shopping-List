import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipeDetails: Recipe;

  constructor() { }

  ngOnInit() {
  }

  recipeSelected(recipeDetails: Recipe) {
    this.recipeDetails = recipeDetails;
  }

}

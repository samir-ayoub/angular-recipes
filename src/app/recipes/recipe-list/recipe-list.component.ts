import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
	recipes: Recipe[] = [
		new Recipe('A Test Recipe', 'This is simply a test', 'http://static.adweek.com/adweek.com-prod/wp-content/uploads/files/news_article/bon-appetit-popcart-hed.jpg'),
    new Recipe('A Test Recipe2', 'This is simply a test', 'http://static.adweek.com/adweek.com-prod/wp-content/uploads/files/news_article/bon-appetit-popcart-hed.jpg')
	];

  constructor() { 
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe) ;
  }

}

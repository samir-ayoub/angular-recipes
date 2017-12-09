import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [

	new Recipe(
		'A Test Recipe', 
		'This is simply a test', 
		'http://static.adweek.com/adweek.com-prod/wp-content/uploads/files/news_article/bon-appetit-popcart-hed.jpg',
		[
			new Ingredient('Meat', 1),
			new Ingredient('French Fries', 20)
		]),
	new Recipe(
		'Baione di due', 
		'This is simply a test', 
		'http://static.adweek.com/adweek.com-prod/wp-content/uploads/files/news_article/bon-appetit-popcart-hed.jpg',
		[
			new Ingredient('Bataaaata', 1),
			new Ingredient('Feijao', 20)
		])
	];

	constructor(private slService: ShoppingListService){}

	getRecipes() {
		return this.recipes.slice();
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients);
	} 
}
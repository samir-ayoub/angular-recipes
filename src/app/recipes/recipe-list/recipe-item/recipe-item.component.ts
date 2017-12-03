import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
	@Input() recipe: Recipe;
	@Output() recipeSelected = new EventEmitter<{void}>();

	// @Output( 'bpCreated') blueprintCreated  = new EventEmitter<{serverName: string, serverContent: string}>();
 //  	newServerName = '';
 //  	newServerContent = '';

	// recipeDetail(recipe: HTMLInputElement) {
	// this.blueprintCreated.emit({
	// 	serverName: nameInput.value,
	// 	serverContent:this.serverContentInput.nativeElement.value
	// });
	// }

	onSelected(element: HTMLInputElement) {
		this.recipeSelected.emit();
	}


	constructor() { }

	ngOnInit() {
	}

}

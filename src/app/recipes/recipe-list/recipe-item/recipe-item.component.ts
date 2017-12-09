import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
	@Input() recipe: Recipe;
	
	// @Output( 'bpCreated') blueprintCreated  = new EventEmitter<{serverName: string, serverContent: string}>();
 //  	newServerName = '';
 //  	newServerContent = '';

	// recipeDetail(recipe: HTMLInputElement) {
	// this.blueprintCreated.emit({
	// 	serverName: nameInput.value,
	// 	serverContent:this.serverContentInput.nativeElement.value
	// });
	// }


	constructor(private recipeService: RecipeService) { }

	ngOnInit() {
	}

	onSelected(){
		this.recipeService.recipeSelected.emit(this.recipe);
	}

}

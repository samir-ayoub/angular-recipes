import { Directive, HostListener, HostBinding  } from '@angular/core';

@Directive({
	selector: '[appDropdown]'
})

export class DropdownDirective {
	// will bind property to host element, If a binding changes, HostBinding will update the host element.
	@HostBinding('class.open') isOpen = false;

	// para pegar o click hostlistener
	@HostListener('click') toggleOpen() {
		this.isOpen = !this.isOpen;
	}
}
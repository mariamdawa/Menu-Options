import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
	selector: '[full-menu]'
})
export class FullMenu {
	@HostListener('click', ['$event']) toggleOpen($event: any) {
		$event.preventDefault();
		let sidebar: Element | null = document.querySelector('#sidebar')!;
		let content: Element | null = document.querySelector('#content')!;

		sidebar.className = '';
		content.className = '';
	}
}

@Directive({
	selector: '[close-menu]'
})
export class CloseMenu {
	@HostListener('click', ['$event']) toggleOpen($event: any) {
		$event.preventDefault();
		let sidebar: Element | null = document.querySelector('#sidebar')!;
		let content: Element | null = document.querySelector('#content')!;

		sidebar.classList.add('closed');
		content.className = 'sidebar-hidden';
	}
}

@Directive({
	selector: '[overlay-menu]'
})
export class OverlayMenu {
	@HostListener('click', ['$event']) toggleOpen($event: any) {
		$event.preventDefault();
		let sidebar: Element | null = document.querySelector('#sidebar')!;
		let content: Element | null = document.querySelector('#content')!;
		let overlay: Element | null = document.querySelector('#overlay')!;

		sidebar.className = '';
		content.className = 'overlay-active';
		overlay?.classList.add('overlay');
	}
}

@Directive({
	selector: '[minify-menu]'
})
export class MinifyMenu {
	@HostListener('click', ['$event']) toggleOpen($event: any) {
		let sidebar: Element | null = document.querySelector('#sidebar')!;
		let content: Element | null = document.querySelector('#content')!;

		sidebar.className = 'minified';
		content.className = 'minified-active';
	}
}

@Directive({
	selector: '[overlay-close]'
})
export class CloseOverlay {
	@HostListener('click', ['$event']) toggleOpen($event: any) {
		let sidebar: Element | null = document.querySelector('#sidebar')!;
		let content: Element | null = document.querySelector('#content')!;
		let overlay: Element | null = document.querySelector('#overlay')!;

		sidebar.className = 'closed';
		content.className = 'sidebar-hidden';
		overlay.classList.remove('overlay');
	}
}




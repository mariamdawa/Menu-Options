import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';

import * as $ from 'jquery';

@Directive({ selector: '[sidebar]' })
export class SidebarDirective implements AfterViewInit {

	constructor(private el: ElementRef) { }

	@HostListener('click', ['$event']) toggleOpen($event: any) {
		//$event.preventDefault();
	}

	ngAfterViewInit() {
		let anchor = $(this.el.nativeElement);
		
		anchor.click(function (event) {
			var current = anchor.next(".sub-menu");
			var all = "#sidebar > ul.menu-list ul.sub-menu";
			var parent = $(current).parents('ul.sub-menu');
			console.log(parent);
			
			
			var IsMenuMinified = $('#sidebar.minified').length;
			if(!IsMenuMinified){
				$(all).not(parent).not(current).slideUp(250, function () {
					$(this).removeClass("expand");
				});
	
				$(current).slideToggle(250, function () {
					$(current).hasClass("expand") ? $(current).removeClass("expand") : $(current).addClass("expand");
				});
			}
		});
	}
}

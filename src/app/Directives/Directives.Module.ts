import { NgModule } from "@angular/core";

import { CloseMenu, CloseOverlay, FullMenu, MinifyMenu, OverlayMenu } from "./MenuOptions.Directive";
import { SidebarDirective } from "./Sidebar.Directive";




@NgModule({
	declarations: [
		FullMenu,
		CloseMenu,
		OverlayMenu,
		CloseOverlay,
		MinifyMenu,
		SidebarDirective
	],
	exports: [
		FullMenu,
		CloseMenu,
		OverlayMenu,
		CloseOverlay,
		MinifyMenu,
		SidebarDirective
	]
})
export class DirectivesModule { }
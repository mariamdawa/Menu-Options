import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  IsCollapsedHome = true;
  IsCollapsedPage = true;

  constructor() { }

  ngOnInit(): void {
  }

}

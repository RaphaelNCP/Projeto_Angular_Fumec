import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { RightMenuComponent } from './right-menu/right-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    LeftMenuComponent,
    RightMenuComponent
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PrincipalSectionComponent} from './principal-section/principal-section.component';
import {FirstSectionComponent} from './first-section/first-section.component';
import {FooterSectionComponent} from './footer-section/footer-section.component'

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    PrincipalSectionComponent,
    FirstSectionComponent,
    FooterSectionComponent,
  ],
})
export class AsideComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}

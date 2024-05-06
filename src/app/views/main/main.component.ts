import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-content',
  imports: [RouterOutlet],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
})
export class MainContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

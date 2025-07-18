import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { HomeComponent } from './features/home/home.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'mi-portafolio';

  ngOnInit() {
    AOS.init();
  }
}
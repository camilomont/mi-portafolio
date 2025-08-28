import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import * as AOS from 'aos';
import { HabilidadesComponent } from '../habilidades/habilidades.component';
import { ProyectosComponent } from '../proyectos/proyectos.component';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HabilidadesComponent, ProyectosComponent, ContactoComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('typewriterText', { static: true }) typewriterText!: ElementRef;

  texts: string[] = ["DESARROLLADOR", "FULL STACK", "COLABORADOR"];
  speed: number = 100;
  textIndex: number = 0;
  characterIndex: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    AOS.init({offset: 0});

    if (window.location.hash === '#sobre-mi') {
      history.replaceState(null, '', window.location.pathname);

      setTimeout(() => {
        const anchor = document.getElementById('sobre-mi');
        if (anchor) {
          anchor.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1000);
    }

    this.typeWriter();
  }

  typeWriter(): void {
    const currentText = this.texts[this.textIndex];
    if (this.characterIndex < currentText.length) {
      this.typewriterText.nativeElement.innerHTML += currentText.charAt(this.characterIndex);
      this.characterIndex++;
      setTimeout(() => this.typeWriter(), this.speed);
    } else {
      setTimeout(() => this.eraseText(), 1000);
    }
  }

  eraseText(): void {
    const content = this.typewriterText.nativeElement.innerHTML;
    if (content.length > 0) {
      this.typewriterText.nativeElement.innerHTML = content.slice(0, -1);
      setTimeout(() => this.eraseText(), 50);
    } else {
      this.textIndex = (this.textIndex + 1) % this.texts.length;
      this.characterIndex = 0;
      setTimeout(() => this.typeWriter(), 500);
    }
  }
}

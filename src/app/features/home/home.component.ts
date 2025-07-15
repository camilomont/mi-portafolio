import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('dropdown', { static: true }) dropdown!: ElementRef;
  @ViewChild('typewriterText', { static: true }) typewriterText!: ElementRef;

  texts: string[] = ["DESARROLLADOR", "FULL STACK", "DEVELOPER"];
  speed: number = 100;
  textIndex: number = 0;
  characterIndex: number = 0;

  ngOnInit(): void {
    AOS.init({ offset: 0 });
    this.typeWriter();
  }

  hamburg(): void {
    this.dropdown.nativeElement.style.transform = 'translateY(0px)';
  }

  cancel(): void {
    this.dropdown.nativeElement.style.transform = 'translateY(-500px)';
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

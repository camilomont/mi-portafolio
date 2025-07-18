import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactoComponent {

}

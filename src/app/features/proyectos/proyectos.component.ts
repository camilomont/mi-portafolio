import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProyectosComponent {
  ngOnInit(): void {
    AOS.init();
  }
  proyectos = [
    {
      nombre: 'Sitio web personal',
      descripcion: 'Una página web personal creada para presentar mi trayectoria profesional y técnica. Este portafolio permite explorar mis estudios certificados, habilidades en desarrollo frontend y backend, así como proyectos destacados. Diseñada con un enfoque moderno e interactivo, busca reflejar quién soy, cómo trabajo y en qué áreas puedo aportar valor.',
      imagen: '../../../assets/img/pagina_web.webp',
      tecnologias: [
        { icon: 'logos:angular-icon' },
        { icon: 'logos:html-5' },
        { icon: 'logos:css-3' },
        { icon: 'logos:typescript-icon' }
      ],
      url: 'https://mi-portafolio-five-black.vercel.app/',
      github: 'https://github.com/camilomont/mi-portafolio'
    },
    {
      nombre: 'Comparador de Precios Inteligente',
      descripcion: 'Aplicación web interactiva que permite al usuario ingresar productos y simula la comparación de precios en distintas tiendas. Incluye filtros y un diseño agradable para facilitar la experiencia de usuario. Proyecto enfocado en practicar React, manejo de estados, componentes reutilizables y estilos personalizados con Bootstrap.',
      imagen: '../../../assets/img/comparador_precios.webp',
      tecnologias: [
        { icon: 'logos:react' },
        { icon: 'logos:typescript-icon' },
        { icon: 'logos:bootstrap' },
        { icon: 'logos:vitejs' },
        { icon: 'logos:uuid' }
      ],
      url: 'https://comparador-precios-svfm.vercel.app/',
      github: 'https://github.com/camilomont/comparador-precios'
    }
  ]
}
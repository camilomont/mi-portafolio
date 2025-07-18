import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HabilidadesComponent {
  activeTab: 'frontend' | 'backend' | 'soft' = 'frontend';

  frontendSkills = [
    { name: 'HTML', icon: 'logos:html-5', level: 'Avanzado', color: '#e44d26' },
    { name: 'CSS', icon: 'logos:css-3', level: 'Avanzado', color: '#264de4' },
    { name: 'JavaScript', icon: 'logos:javascript', level: 'Intermedio', color: '#f0db4f' },
    { name: 'TypeScript', icon: 'devicon:typescript', level: 'Intermedio', color: '#3178c6' },
    { name: 'React', icon: 'logos:react', level: 'Básico', color: '#61dafb' },
    { name: 'Vue', icon: 'logos:vue', level: 'Básico', color: '#42b883' },
    { name: 'Angular', icon: 'logos:angular-icon', level: 'Avanzado', color: '#dd0031' },
    { name: 'Bootstrap', icon: 'logos:bootstrap', level: 'Intermedio', color: '#7952b3' },
    { name: 'Tailwind', icon: 'logos:tailwindcss-icon', level: 'Básico', color: '#38bdf8' },
    { name: 'SASS', icon: 'logos:sass', level: 'Intermedio', color: '#cd6799' },
    { name: 'Git', icon: 'logos:git-icon', level: 'Intermedio', color: '#f1502f' },
    { name: 'GitHub', icon: 'logos:github-icon', level: 'Intermedio', color: '#ffffff' }
  ];

  backendSkills = [
    { name: 'Node.js', icon: 'logos:nodejs-icon', level: 'Intermedio', color: '#68a063' },
    { name: 'Express', icon: 'devicon:express', level: 'Intermedio', color: '#ffffff' },
    { name: 'MySQL', icon: 'vscode-icons:file-type-mysql', level: 'Intermedio', color: '#00758f' },
    { name: 'MongoDB', icon: 'logos:mongodb-icon', level: 'Básico', color: '#47a248' },
    { name: 'Postman', icon: 'logos:postman-icon', level: 'Intermedio', color: '#ff6c37' }
  ];

softSkills = [
  { name: 'Trabajo en equipo', icon: 'mdi:account-group', color: '#3498db' },
  { name: 'Comunicación efectiva', icon: 'mdi:message-text-outline', color: '#2ecc71' },
  { name: 'Resolución de problemas', icon: 'mdi:lightbulb-outline', color: '#f1c40f' },
  { name: 'Proactividad', icon: 'mdi:rocket-launch-outline', color: '#e67e22' },
  { name: 'Aprendizaje continuo', icon: 'mdi:book-open-variant', color: '#9b59b6' },
  { name: 'Pensamiento crítico', icon: 'mdi:head-cog-outline', color: '#34495e' },
  { name: 'Gestión del tiempo', icon: 'mdi:clock-outline', color: '#16a085' },
  { name: 'Adaptabilidad', icon: 'mdi:repeat-variant', color: '#1abc9c' },
  { name: 'Responsabilidad', icon: 'mdi:shield-check-outline', color: '#c0392b' },
  { name: 'Escucha activa', icon: 'mdi:ear-hearing', color: '#d35400' },
  { name: 'Empatía', icon: 'fa-solid:user-friends', color: '#8e44ad' }
];

  selectTab(tab: 'frontend' | 'backend' | 'soft') {
    this.activeTab = tab;
  }
}

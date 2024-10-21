import { Component } from '@angular/core';
import { OpenDirective } from '../../directives/open.directive';
import { MoncompteComponent } from '../moncompte/moncompte.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [OpenDirective,MoncompteComponent,RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToggleDirective } from '../directives/toggle.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,ToggleDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

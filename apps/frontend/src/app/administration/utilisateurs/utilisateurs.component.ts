import { Component } from '@angular/core';
import { MaterialsModule } from '../../materials.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-utilisateurs',
  standalone: true,
  imports: [MaterialsModule,RouterModule],
  templateUrl: './utilisateurs.component.html',
  styleUrl: './utilisateurs.component.css'
})
export class UtilisateursComponent {

}

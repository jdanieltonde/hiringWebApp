import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-communique',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './communique.component.html',
  styleUrl: './communique.component.css'
})
export class CommuniqueComponent {

}

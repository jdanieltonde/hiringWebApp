import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-administration',
  standalone: true,
  imports: [SidebarComponent,NgClass,RouterOutlet,HeroComponent],
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.css'
})
export class AdministrationComponent {
  hiddenSidebar:boolean=true

  collapsing(event:boolean){
    this.hiddenSidebar=event
  }
}

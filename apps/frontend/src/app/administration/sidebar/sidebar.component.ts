import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink,NgClass,NgIf,RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  collapsedsidebar!:boolean
  @Output() collapser= new EventEmitter()


  collapse(){    
    this.collapsedsidebar= !this.collapsedsidebar
    this.collapser.emit(!this.collapsedsidebar)
  }
}

import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';


export interface Slide {
title:string;
position:number;
description:string;
image:string;
}

const SLIDES_DATA: Slide[] = [
  {title:'Slide 1',position:1,description:'This is slide 1',image:"https://cdn.pixabay.com/photo/2022/03/27/12/46/chongqing-7094955_1280.jpg"},
  {title:'Slide 2',position:2,description:'This is slide 2',image:'https://cdn.pixabay.com/photo/2020/03/26/16/48/electricity-4970999_1280.jpg'},
  // {title:'Slide 3',position:3,description:'This is slide 3',image:'https://cdn.pixabay.com/photo/2018/10/24/21/33/electrician-3771318_1280.jpg'},
  // {title:'Slide 4',position:4,description:'This is slide 4',image:'https://cdn.pixabay.com/photo/2016/09/26/19/07/electrician-1696757_1280.jpg'},
]

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, HeaderComponent,NgClass,NgStyle,NgFor,NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  allSlides = SLIDES_DATA;
  isActive:boolean=true
  currentStyles: Record<string, string> = {};
  constructor() { }
  ngOnInit() {
    
  }

  activeCoche(){
    this.isActive=!this.isActive
  }

 

  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    return this.currentStyles = {
      'background-image':'url(' + this.allSlides[0].image + ')', 
      'background-repeat': 'no-repeat',
    };
  }

}


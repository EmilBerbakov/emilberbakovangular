import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
  standalone: true,
  imports: [NgOptimizedImage]
})
export class AboutmeComponent {

  constructor(){}
}

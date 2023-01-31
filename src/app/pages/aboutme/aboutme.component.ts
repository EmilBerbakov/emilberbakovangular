import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent {

  imagepath: string = "../assets/MyPortrait.jpg";

  constructor(private titleService:Title){
    this.titleService.setTitle("A Bit About Me");
  }
}

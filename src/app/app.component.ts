import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'emilberbakovangular';
  isMenuCollapsed= true;
  isLoggedin:boolean =false;

  ngOnInit():void {
    let jwt:any = sessionStorage.getItem("JWT");
    this.isLoggedin=(jwt!==null && jwt!==undefined);
  }

  logout= async(event:any) =>{
    sessionStorage.clear();
    window.location.replace("/home");
  }
}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mylibrary',
  templateUrl: './mylibrary.component.html',
  styleUrls: ['./mylibrary.component.css']
})
export class MylibraryComponent implements OnInit{
  library:any;
  isLoggedIn:boolean = false;
  jwtPayload:any = JSON.parse(sessionStorage.getItem("Payload")!.toString())
  

  constructor(
    private titleService:Title
  ) {
    titleService.setTitle("My Library");
  };
  
  ngOnInit(): void {
        const jwt:any = sessionStorage.getItem("JWT");
        this.isLoggedIn=(jwt!==null && jwt !== undefined);
        
        if(this.isLoggedIn==false){
          window.location.replace("/home");
        }

        
        var myHeaders=new Headers();
        myHeaders.append("Content-Type","application/json");

        var raw = JSON.stringify({
          jwt: jwt
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw
        }
        
        fetch("https://emilberbakov.com:44422/api/librarydb/mylibrary", requestOptions)
          .then((response)=>(response.json()))
          .then ((result)=>(this.library=result));

        console.log(this.library);
    }

}

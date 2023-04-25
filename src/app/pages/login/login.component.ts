import { CommonModule } from '@angular/common';
import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=>LoginComponent),
      multi:true
    }
  ],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule]
})
export class LoginComponent implements ControlValueAccessor,OnInit{
  isLoggedin:boolean =false;

  ngOnInit(): void {
    let jwt:any= sessionStorage.getItem("JWT");
    this.isLoggedin=(jwt!==null && jwt!==undefined);
  }

  constructor(
    private formBuilder: FormBuilder
  ){};

  loginform=this.formBuilder.group({
    email: '',
    password: ''
  });

  writeValue(event:any){
    event.target.attributes.value;
  };

  propogateChange=(_:any)=>{};

  registerOnChange(fn:any){
    this.propogateChange=fn;
  };

  registerOnTouched() {};

  onSubmit = async(event:any) => {
    let result;
    event.preventDefault;
    var myHeaders= new Headers();
    myHeaders.append("Content-Type","application/json");
    var raw=JSON.stringify(this.loginform.value);
    var requestOptions={
      method: "POST",
      headers: myHeaders,
      body: raw
    };
    try {
      let res = await fetch("https://emilberbakov.com:44422/api/login/login", requestOptions);
      result = await res.text();
      console.log(result);

      if (result == "0") {
        sessionStorage.clear();
        sessionStorage.setItem(
          "Error",
          "There was an error logging in.  Please try again."
        );
      } else if (result == "2") {
        sessionStorage.clear();
        sessionStorage.setItem(
          "Error",
          "Incorrect Email / Password combination."
        );
      } else {
        sessionStorage.clear();
        sessionStorage.setItem("JWT", result);
        sessionStorage.setItem("Payload", jwtPayload(result));
      }
      window.location.reload();
    } catch {
      sessionStorage.clear();
      sessionStorage.setItem(
        "Error",
        "There was an unforseen error.  Please try again."
      );
      window.location.reload();

    }

  }
}

function jwtPayload(t:string) {
  let payload = window.atob(t.split(".")[1]);
  return payload;
}

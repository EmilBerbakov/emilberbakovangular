import { CommonModule } from '@angular/common';
import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=>RegisterComponent),
      multi: true
    }
  ],
  standalone: true,
  imports:[CommonModule, ReactiveFormsModule]
})
export class RegisterComponent implements ControlValueAccessor {
  constructor(
    private formBuilder: FormBuilder
  ){};

  registerform=this.formBuilder.group(
    {
      firstName:'',
      lastName:'',
      email:'',
      password:''
    }
  );

  writeValue(event: any){
    event.target.attributes.value;
  }

  propogateChange=(_:any)=>{};

  registerOnChange(fn:any){
    this.propogateChange=fn;
  }

  registerOnTouched(){};

  onSubmit = async(event:any)=>{
    let result;
    event.preventDefault;
    var myHeaders= new Headers();
    myHeaders.append("Content-Type","application/json");
    var raw=JSON.stringify(this.registerform.value);

    var requestOptions={
      method: "POST",
      headers: myHeaders,
      body:raw
    };

    try {
      let res = await fetch("https://emilberbakov.com:44422/api/login/register", requestOptions);
      result = await res.text();

      //1 = account created successfully
      //2 = email already registered to an existing account; set "Error" to a message that lets them know
      //0 = other error; set "Error" to generic issue message
    }

    catch(e){
      //This is where we'll set "Error" to a generic issue message for the toast
    }
  }
}

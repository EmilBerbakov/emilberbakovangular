import { Component, forwardRef, Provider, OnInit } from '@angular/core';
import { FormBuilder, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-librarydb',
  templateUrl: './librarydb.component.html',
  styleUrls: ['./librarydb.component.css'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=>LibrarydbComponent),
      multi:true
    }
  ]
})
export class LibrarydbComponent implements ControlValueAccessor,OnInit {
  result:any;
  noresults: boolean = true;
  isCardCollapsed: boolean = false;

  ngOnInit(): void {
    this.result='';
  }
  
  constructor(
    private formBuilder: FormBuilder, private titleService:Title
  ) {
    titleService.setTitle("Encyclopedia Berb");
  };

  librarysearchform=this.formBuilder.group({
    searchtype: '',
    searchvalue: ''
  });

  writeValue(event:any){
      event.target.attributes.value;
  }

  propogateChange =(_:any)=>{};
  registerOnChange(fn:any){
    this.propogateChange=fn;
  }

  registerOnTouched(){}



  searchswitch(event:any) {
    var searchbox = document.getElementById("searchvalue");
    searchbox!.style.display = "initial";
  }

  visibilityswitch(event: any){
    
    const searchval=event.target.value.trim();
    const submitbutton=document.getElementById("submitbutton") as HTMLButtonElement;
    if (searchval == "") {
      submitbutton!.disabled = true;
      submitbutton!.style.display = "none";
    } else {
      submitbutton!.disabled = false;
      submitbutton!.style.display = "initial";
    }
  }

  onSubmit = async(event:any)=>{
    let result;
    event.preventDefault;
    //console.log(this.librarysearchform.value);
    var myHeaders= new Headers();
    myHeaders.append("Content-Type","application/json");
    var raw = JSON.stringify(this.librarysearchform.value);
    var requestOptions ={
      method: "POST",
      headers: myHeaders,
      body: raw,
    };
    try {
      let res= await fetch("https://emilberbakov.com:44422/api/librarydb/results", requestOptions);
      result = await res.text();
      console.log(result);
      this.result=JSON.parse(result);
      if (typeof this.result[0].Result !=='undefined'){
        this.noresults=true;
      }
      else{
        this.noresults=false;
      }
    }

    catch(e){
      this.noresults=true;
      this.result=JSON.parse('[{'+'"'+'Result:'+'"'+': '+'"'+'No results found'+'"'+'}]');
      console.log(result);
    }
    this.librarysearchform.reset();
  }

 
}


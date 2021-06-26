import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {

    if(localStorage.getItem("thedatagrad")!=null){
      this.arr=JSON.parse(localStorage.getItem("thedatagrad")|| '{}');
      
    }else{
      this.arr=[];
   
    }
  
  }
 
  
    upadte:boolean=false;
    index:number=1;
  arr :any []
 dataform=new FormGroup({
    name:new FormControl(null),
    price:new FormControl(null),
    category:new FormControl(null),

  })


  dataupadte=new FormGroup({
    name:new FormControl(null),
    price:new FormControl(null),
    category:new FormControl(null),
  })
  carentdata:any;

  submitdata(thedata:any){
  
    this.arr.push(thedata.value);
    localStorage.setItem("thedatagrad",JSON.stringify(this.arr));
    console.log(this.arr);

  }
delete(index:any){
  this.arr.splice(index,1);
  localStorage.setItem("thedatagrad",JSON.stringify(this.arr));
}
thedataup(data:any){
  this.upadte=true;
  this.index=data;
    console.log(data);
  this.carentdata= this.arr[this.index];
  console.log(this.carentdata)  ;
}
thedataup2(thedata:any){
    var x=thedata.value;
    this.arr[this.index]=x;
    localStorage.setItem("thedatagrad",JSON.stringify(this.arr));
    this.upadte=false;
}
thecancel(){
  this.upadte=false;
}
  ngOnInit(): void {
    
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data1:any="1"
  data2:any="2"
  data3:any="3"

  onSubmit(e:any){
    e.preventDefault();

    console.log(e);
    
    if(this.data1===''||this.data2===''||this.data3=='')
    {
      alert('enter full')
      
    }
    else{
     alert('ok')
     
    }
  }


  

}

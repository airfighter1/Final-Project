import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectfinal';
  trial=false;





  tableArray=[{
    productname:"New Mobile App UI KIT F...", status:"Active", sold:"10", view:"320"
  }, {
    productname:"40+ Landing Page Temp.... ", status:"Active", sold:"20", view:"420"
  },{
    productname:"Doctor Consultant UI KIT ..", status:"Active", sold:"20", view:"420"
  },{
    productname:"Start Illustration KIT Ve... ", status:"Active", sold:"20", view:"420"
  }]
  
  submitForm(item:any){
    console.log(item);
    console.log(this.trial);
    this.tableArray.push(item);
    this.cancel();
    
    
  }
dlt(indx:any){
  console.log(indx)
  
  this.tableArray.splice(indx,1);
  // delete this.tableArray[indx];
  // console.log(this.tableArray);
  
  
}
  cancel(){
    this.trial=false;

  }

  show(){
    this.trial=true;
  }

 
}

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
// import {formsComponent} from './forms'/forms.Component';

const routes: Routes = [
  // {
  // path:'form',
  // Component: formsComponent;
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//generic libs
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import { FileComponent } from './file/file.component';

//const routes
const routes: Routes = [
  {
    //route to init
    path: '',
    component: FileComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
    {
      path: 'users',
      component: UserListComponent
    },
    {
      path: 'users/upload',
      component: UserListComponent
    },          
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false }) // set to true for debugging
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

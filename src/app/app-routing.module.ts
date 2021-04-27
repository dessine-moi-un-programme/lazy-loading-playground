import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ToDoPageComponent } from './to-do/components/to-do-page/to-do-page.component';
import { UserPageComponent } from './user/components/user-page/user-page.component';

const routes: Routes = [

  { path: '', component: HomePageComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'toDo', component: ToDoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

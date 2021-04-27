import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { FormsModule } from '@angular/forms';
import { UserPageComponent } from './components/user-page/user-page.component';
import { ToDoModule } from '../to-do/to-do.module';



@NgModule({
  declarations: [
    UserComponent,
    UserPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ToDoModule
  ]
})
export class UserModule { }

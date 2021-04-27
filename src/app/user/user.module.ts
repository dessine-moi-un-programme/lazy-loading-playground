import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { FormsModule } from '@angular/forms';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    UserComponent,
    UserPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoPageComponent } from './components/to-do-page/to-do-page.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoAddComponent } from './components/to-do-add/to-do-add.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ToDoPageComponent,
    ToDoListComponent,
    ToDoAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class ToDoModule { }

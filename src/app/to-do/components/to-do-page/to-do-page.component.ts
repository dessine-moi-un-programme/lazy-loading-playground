import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../../models/to-do-item.model';

@Component({
  selector: 'app-to-do-page',
  templateUrl: './to-do-page.component.html',
  styleUrls: ['./to-do-page.component.scss']
})
export class ToDoPageComponent implements OnInit {

  toDoItems: Array<ToDoItem> = [];

  constructor() { }

  ngOnInit(): void {
    this.toDoItems.push({description: 'Faire les courses', done: true});
    this.toDoItems.push({description: 'Finir d\'écrire \'article', done: false});
    this.toDoItems.push({description: 'Aller courir', done: true});
  }

  itemAdded($event: ToDoItem): void {
    this.toDoItems.push($event);
  }
}

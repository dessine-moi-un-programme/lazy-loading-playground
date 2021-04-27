import { Component, Input, OnInit } from '@angular/core';
import { ToDoItem } from '../../models/to-do-item.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  @Input() toDoItems: Array<ToDoItem> = [];

  constructor() { }

  ngOnInit(): void {
  }

}

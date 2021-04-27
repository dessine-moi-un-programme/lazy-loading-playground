import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToDoItem } from '../../models/to-do-item.model';

@Component({
  selector: 'app-to-do-add',
  templateUrl: './to-do-add.component.html',
  styleUrls: ['./to-do-add.component.scss']
})
export class ToDoAddComponent implements OnInit {

  description: string = '';
  @Output() itemAdded: EventEmitter<ToDoItem> = new EventEmitter<ToDoItem>();

  constructor() { }

  ngOnInit(): void {
  }

  addItem(): void {
    this.itemAdded.emit({description: this.description, done: false});
    this.description = '';
  }
}

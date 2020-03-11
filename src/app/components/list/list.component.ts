import { Component, OnInit } from '@angular/core';
import { TodoItemModule } from 'src/app/models/todo-item/todo-item.module';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  arEl : string[] = ['al', 'bu', 'cri'];
  arToDoItems: TodoItemModule[] = [];

  constructor() {
    this.arToDoItems.push({name: 'john', finished: false});
    this.arToDoItems.push({name: 'dirk', finished: true});
    this.arToDoItems.push({name: 'yohan', finished: false});
  }

  ngOnInit() {
  }

}

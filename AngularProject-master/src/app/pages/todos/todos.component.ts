import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comments',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class todosComponents implements OnInit {

  todos: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.todos = this.dataService.gettodos();
  }

}

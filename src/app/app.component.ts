import { Component } from '@angular/core';
import {Todo} from './todo';
import {TodoDataService} from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {

  constructor(private todoDataService: TodoDataService){
  }

  onAddTodo(todo: Todo){
    this.todoDataService.addTodo(todo);
  }

  ontoggleTodoComplete(todo){
    this.todoDataService.toggleTodoComplete(todo);
  }

  onremoveTodo(todo){
    this.todoDataService.toggleTodoComplete(todo);
  }

  get todos(){
    return this.todoDataService.getAllTodos();
  }
}

import { Injectable } from '@angular/core';
import {Todo} from './todo';

@Injectable()
export class TodoDataService {

  lastId: number = 0;
  todos: Todo[] = [];

  constructor() { }
  
  //Post
  addTodo(todo: Todo): TodoDataService{
    if (!todo.id){
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  //Delete
  deleteTodoById(id: number): TodoDataService{
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  //Put
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo){
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Get/todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Get/todos/:id
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}

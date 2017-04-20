/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoDataService } from './todo-data.service';
import {Todo} from './todo';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should ...', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllTodos()', ()=>{

    it('should return an empty array by defaualt', inject([TodoDataService], (service: TodoDataService)=>{
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should return all todos', inject([TodoDataService], (service: TodoDataService)=>{
      let todo1 = new Todo({title: 'Hi 1', complete: false});
      let todo2 = new Todo({title: 'Hi 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));
  });

  describe('#save(todo)', ()=>{

    it('should automatically assign an incrementing id', inject([TodoDataService], (service: TodoDataService)=>{
      let todo1 = new Todo({title: 'Hi 1', complete: false});
      let todo2 = new Todo({title: 'Hi 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getTodoById(1)).toEqual(todo1);
      expect(service.getTodoById(1)).toEqual(todo1);
    }));
  });

  describe('#deleteTodoById', ()=>{

    it('should remove a todo by its id', inject([TodoDataService], (service: TodoDataService)=>{
      let todo1 = new Todo({title: 'Hi 1', complete: false});
      let todo2 = new Todo({title: 'Hi 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(1);
      expect(service.getAllTodos()).toEqual([todo2]);
      service.deleteTodoById(2);
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should not remove any todos if there is no matching id', inject([TodoDataService], (service: TodoDataService)=>{
      let todo1 = new Todo({title: 'Hi 1', complete: false});
      let todo2 = new Todo({title: 'Hi 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(3);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));    
  });

  describe('#updateTodoById(id, values)', ()=>{

    it('should return todo with the corresponding id and updated data', inject([TodoDataService], (service: TodoDataService)=>{
      let todo1 = new Todo({title: 'Hi 1', complete: false});
      service.addTodo(todo1);
      let updatedTodo = service.updateTodoById(1, {
        title: 'Hi Back'
      });
      expect(updatedTodo.title).toEqual('Hi Back');
    }));

    it('should return null if todo is not found', inject([TodoDataService], (service: TodoDataService)=>{
      let todo1 = new Todo({title: 'Hi 1', complete: false});
      service.addTodo(todo1);
      let updatedTodo = service.updateTodoById(2, {
        title: 'Hi Back'
      });
      expect(updatedTodo).toEqual(null);
    }));
  });

  describe('#toggleTodoComplete(todo)', ()=>{

    it('should return the updated todo with inversed complete status', inject([TodoDataService], (service: TodoDataService)=>{
      let todo1 = new Todo({title: 'Hi 1', complete: false});
      service.addTodo(todo1);
      let updatedTodo = service.toggleTodoComplete(todo1);
      expect(updatedTodo.complete).toEqual(true);
      service.toggleTodoComplete(todo1);
      expect(updatedTodo.complete).toEqual(false);
    }));
  });

});

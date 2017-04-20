import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accecpt values in the constructor', ()=>{
    let todo = new Todo({
      title: 'ho',
      complete: true
    });
    expect(todo.title).toEqual('ho');
    expect(todo.complete).toEqual(true);
  });
});

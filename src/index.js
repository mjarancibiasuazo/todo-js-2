

import './styles.css';
import { Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';


//import { Todo } from './classes/todo.class';
//import { TodoList } from './classes/todo-list-class';


export const todoList = new TodoList();

console.log( todoList.todos );

//todoList.todos.forEach( todo => crearTodoHtml( todo ) );

todoList.todos.forEach( crearTodoHtml);
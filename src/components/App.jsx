import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Counter from './Counter';
import Dropdown from './Dropdown';
import ColorPicker from './ColorPicker';
import TodoList from './TodoList';
import initialTodos from '../../src/todos.json';
import Container from './Container';
import TodoEditor from './TodoEditor/TodoEditor';
import Filter from './Filter';
import Form from './Form';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
      completed: false,
    };

    // this.setState(prevState => ({
    //   todos: [todo, ...prevState.todos],
    // }));

    // Деструктуризація prevState.todos
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
    // console.log('text:', text);
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    // console.log('todoId:', todoId);
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       console.log('Find todo!');
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }

    //     return todo;
    //   }),
    // }));

    // Another way
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  formSubmitHandler = data => {
    // console.log('data:', data);
    setTimeout(() => {
      console.log('data 1:', data);
    }, 1000);
  };

  render() {
    const { todos, filter } = this.state;

    // Значення, що обчислюються
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        <h1>Стан компонента та форми</h1>
        <h2 style={{ color: 'indigo' }}>Counter</h2>
        <Counter initialValue={10} />
        <h2 style={{ color: 'indigo' }}>Dropdown</h2>
        <Dropdown />
        <h2 style={{ color: 'indigo' }}>ColorPicker</h2>
        <ColorPicker options={colorPickerOptions} />
        <h2 style={{ color: 'indigo' }}>Form</h2>
        <Form onSubmit={this.formSubmitHandler} />
        <h2 style={{ color: 'indigo' }}>TodoList</h2>
        <div>
          <p>Загальна кількість: {totalTodoCount}</p>
          <p>Кількість виконаних: {completedTodoCount}</p>
        </div>
        <TodoEditor onSubmit={this.addTodo} />
        <Filter value={filter} onChange={this.changeFilter} />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </Container>
    );
  }
}

export default App;

// export const App = () => {
//   return (
//     <div>
//       <h1>Стан компонента</h1>
//       <h2 style={{ color: 'indigo' }}>Counter</h2>
//       <Counter initialValue={10} />
//       <h2 style={{ color: 'indigo' }}>Dropdown</h2>
//       <Dropdown />
//       <h2 style={{ color: 'indigo' }}>ColorPicker</h2>
//       <ColorPicker options={colorPickerOptions} />
//       <h2 style={{ color: 'indigo' }}>TodoList</h2>
//       <TodoList />
//     </div>
//   );
// };

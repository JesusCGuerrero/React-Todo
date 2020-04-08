import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './components/Todo.css'

const list = [
  {
    task: "Do the Dishes",
    id: 123,
    completed: false
  },
  {
    task: "Sweep the floors",
    id: 124,
    completed: false
  },
  {
    task: "Mop the floors",
    id: 1235,
    completed: false
  },
  {
    task: "Brush my teeth",
    id: 1236,
    completed: false
  },
  {
    task: "Do the laundry",
    id: 1237,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list
    };
  }
  
  addTask = (event, item) => {
    event.preventDefault()
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    }
    this.setState({
      list: [...this.state.list, newItem]
    })
  }

  toggleItem = itemId => {
    console.log(itemId);
    this.setState({
      list: this.state.list.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearTask = e => {
    e.preventDefault();
    this.setState({
      list: this.state.list.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div className="myApp">
        <TodoList 
        list={this.state.list}
        toggleItem={this.toggleItem}
        clearTask={this.clearTask}
        />
        <TodoForm 
        addTask={this.addTask}
        />
      </div>
    )
  }
};

export default App;

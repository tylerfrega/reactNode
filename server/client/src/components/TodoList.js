import React, { Component } from 'react';
import { getTodos } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoInput from './TodoInput';
import axios from 'axios'
//import { Link } from 'react-router-dom';

import TodoItem from './todoItem';

class TodoList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: this.props.todos
    }

    this.renderList = () => this.state.todos.map((todo, index) =>
      <TodoItem key={index} todoItem={todo} />
    )

   //axios.get('/api/getTodos');

  }

  render() {
    return (
      <div className="container">
        <h1>This is the todo list</h1>
        <TodoInput />
        <ul>
          {this.state.todos ? this.renderList : <div>Add some todos</div>}
        </ul>
      </div>

    )
  }
}
function mapStateToProps(state) {
  return { todos: state.todoList }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getTodos: getTodos }, dispatch)

}

export default connect(mapStateToProps, matchDispatchToProps)(TodoList);


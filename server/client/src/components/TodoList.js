import React, { Component } from 'react';
import { getTodos } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { Link } from 'react-router-dom';

import TodoItem from './todoItem';

class TodoList extends Component {

  constructor(props) {
    super(props);



    this.state = {
      todos: this.props.todos
    }
    //setTimeout(() => {console.log(this.props.getTodos(), ' hello')}, 1000)

  }
  componentWillMount() {

    console.log(this.props, ' props')
    console.log(this.state.todos, 'todos')


  }
  render() {
    return (
      <div className="container">

        <h1>This is the todo list</h1>
        <ul>
          {
            this.state.todos.map((todo, index) =>
              <TodoItem key={index} todoItem={todo} />
            )
          }

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


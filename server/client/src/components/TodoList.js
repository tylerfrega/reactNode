import React, { Component } from 'react';
import { getTodos } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { Link } from 'react-router-dom';

class TodoList extends Component {

  componentDidMount() {
    setTimeout(this.props.getTodos(), 10000)
    setTimeout(()=> { console.log(this.props) }, 10000)
    

  } 
  render() {
    return (
      <div className="container">
        <h1>This is the todo list</h1>
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


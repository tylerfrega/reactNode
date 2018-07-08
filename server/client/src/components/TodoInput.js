import React, { Component } from 'react';
import { getTodos } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { Link } from 'react-router-dom';

class TodoInput extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="type stuff" />
                <input className="btn" type="submit" value="Submit" />
            </form>
        );
    }
}


function mapStateToProps(state) {
    return { todos: state.todoList }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ getTodos: getTodos }, dispatch)

}

export default connect(mapStateToProps, matchDispatchToProps)(TodoInput);

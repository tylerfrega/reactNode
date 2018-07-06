import React, { Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import TodoList from './TodoList';
import Header from './Header';
import Landing from './Landing';


class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }

    render() {
        return(
        <div>
            <BrowserRouter>
                <div className="container">
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/landing" component={Landing} />
                    <Route exact path="/todoList" component={TodoList} getTodos = {this.props.getTodos()}/>
                </div>
            </BrowserRouter>
        </div>
    );
};
};


export default connect(null, actions) (App);
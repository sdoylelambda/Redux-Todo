import React from 'react';
import { connect } from "react-redux";
import { addTodo } from "../actions/index";

class TodoList extends React.Component {
    state = {
        newTodo: ""
    }

    handleChange = e => {
        e.preventDefault();
        console.log(e)
        this.setState({ newTodo: e.target.value})
    }

    handleAddTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo)
        this.setState({ newTodo: ""})
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.todos.map(todo => (
                        <div>
                            {todo}
                        </div>
                    ))}
                </div>    
                <div>
                    <input
                        type="text"
                        value={this.state.newTodo}
                        onChange={this.handleChange}
                        placeholder="enter todo"
                    />
                </div>
            <button onClick={this.handleAddTodo}>Add Todo</button>
           </div>
        )
    }
}

 

const mapStateToProps = state => {
    return {
        todos: state.todos 
    }
}

export default connect(
    mapStateToProps,
    { addTodo }
    )(TodoList);
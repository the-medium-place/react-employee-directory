import React, { Component } from 'react';
import './style.css'

export default class index extends Component {

    state = {
        search: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        console.log(this.state.search)
    }

    render() {

        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <div className="form-group mb-2">
                    <label htmlFor="emp-search" className="sr-only">Search Employees: </label>
                    <input
                        type="text"
                        name="search"
                        onChange={this.handleInputChange}
                        placeholder="Search by Name"
                    />
                </div>
                    <button type="submit" className="btn btn-primary mb-2">Search!</button>
            </form>
        )
    }
}

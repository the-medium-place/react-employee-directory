import React, { Component } from 'react';
import './style.css';
import EmployeeCard from "../EmployeeCard";
import API from '../utils/API';

export default class ListContainer extends Component {
    state = {
        employees: [],
        filteredEmps: [],
        search: ""
    };

    componentDidMount() {
        API.search()
            .then(res => this.setState({ employees: res.data.results, filteredEmps: res.data.results }))
            .catch(err => console.log(err))
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        console.log(this.state.search)
        const empFilter = this.state.employees.filter((employee) => {
                const fullName = `${employee.name.first} ${employee.name.last}`;
                return fullName.toLowerCase().includes(this.state.search.toLowerCase())

        })
        console.log(empFilter);
        this.setState({filteredEmps: empFilter})
        // need an array .filter() here? does this whole page need to be part of the
        // list container in order to have access to the array of employees?
    }

    render() {
        return (
            <div>
                <form className="form-inline" id="form-center" onSubmit={this.handleSubmit}>
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
                
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th></th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Location</th>
                            <th scope="col">Cell Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.filteredEmps.map((employee, index) => <EmployeeCard firstName={employee.name.first} lastName={employee.name.last} city={employee.location.city} state={employee.location.state} email={employee.email} cell={employee.cell} picURL={employee.picture.thumbnail} key={index}/>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

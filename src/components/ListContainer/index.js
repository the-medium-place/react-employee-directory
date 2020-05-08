import React, { Component } from 'react';
import './style.css';
import EmployeeCard from "../EmployeeCard";
import API from '../utils/API';

export default class ListContainer extends Component {
    state = {
        employees: [],
        filteredEmps: []
    };

    componentDidMount() {
        API.search()
            .then(res => this.setState({ employees: res.data.results, filteredEmps: res.data.results }))
            .catch(err => console.log(err))
    }

    handleInputChange = event => {
        const filter = event.target.value;
        const filteredList = this.state.employees.filter(item => {
            // merge all object into a single string and check if user input is within
            let values = Object.values(item) // Object.values() turns the pass object's data into an array
                .join("")// transform the array into string
                .toLowerCase();// take away capitalization for searching
            return values.indexOf(filter.toLowerCase()) !== -1; //search string and return filtered content
        });
        this.setState({ filteredEmps: filteredList });
    }

    handleNameClick = () => {

        const sorted = this.state.filteredEmps.sort((a, b) => a.name.first > b.name.first ? 1 : -1);
        this.setState({ filteredEmps: sorted })
    }

    handleLocationClick = () => {
        const sorted = this.state.filteredEmps.sort((a, b) => a.location.city > b.location.city ? 1 : -1);
        this.setState({ filteredEmps: sorted })
    }


    handleSubmit = event => {
        event.preventDefault();

        const empFilter = this.state.employees.filter((employee) => {
            const fullName = `${employee.name.first} ${employee.name.last}`;
            return fullName.toLowerCase().includes(this.state.search.toLowerCase())

        })
        this.setState({ filteredEmps: empFilter })
        // need an array .filter() here? does this whole page need to be part of the
        // list container in order to have access to the array of employees?
    }

    render() {
        return (
            <div className="list-container">
                <form className="form-inline" id="form-center" onSubmit={this.handleSubmit}>
                    <div className="form-group mb-2">
                        <label htmlFor="emp-search" className="sr-only">Search Employees: </label>
                        <input
                            type="text"
                            name="search"
                            onChange={this.handleInputChange}
                            placeholder="Search Employees"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Search!</button>
                </form>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th></th>
                            <th scope="col" onClick={this.handleNameClick} className="name.first"><i className="fas fa-user-alt center-icon"></i> <i className="fas fa-caret-down"></i></th>
                            <th scope="col" className="center-icon"><i className="far fa-envelope center-icon"></i></th>
                            <th scope="col" className="center-icon" onClick={this.handleLocationClick}><i className="fas fa-map-marked-alt center-icon"></i>  <i className="fas fa-caret-down"></i></th>
                            <th scope="col" className="center-icon"><i className="fas fa-mobile-alt center-icon"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.filteredEmps.map((employee, index) => <EmployeeCard firstName={employee.name.first} lastName={employee.name.last} city={employee.location.city} state={employee.location.state} email={employee.email} cell={employee.cell} picURL={employee.picture.thumbnail} key={index} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

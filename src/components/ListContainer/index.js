import React, { Component } from 'react';
import './style.css';
import EmployeeCard from "../EmployeeCard";
import API from '../utils/API';

export default class ListContainer extends Component {
    state = {
        employees: []
    };

    componentDidMount() {
        API.search()
            .then(res => this.setState({ employees: res.data.results }))
            .catch(err => console.log(err))
    }



    render() {
        return (
            <div>
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
                        {this.state.employees.map((employee, index) => <EmployeeCard firstName={employee.name.first} lastName={employee.name.last} city={employee.location.city} state={employee.location.state} email={employee.email} cell={employee.cell} picURL={employee.picture.thumbnail} key={index}/>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

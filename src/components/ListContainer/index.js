import React from 'react';
import './style.css';
import EmployeeCard from "../EmployeeCard";
import ListTD from '../ListTD'
import API from '../utils/API';

export default class ListContainer extends React.Component {
    state = {
        employees: []
    };

    componentDidMount() {
        API.search()
        .then(res => this.setState({employees: res.data.results}))
        .catch(err => console.log(err))
    }



    render() {

        return (
            <div>
                <table className="table-content">
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City, State</th>
                        <th>Cell Number</th>
                    </tr>
              
                    {this.state.employees.map(employee => <EmployeeCard firstName={employee.name.first} lastName={employee.name.last} city={employee.location.city} state={employee.location.state} email={employee.email} cell={employee.cell} picURL={employee.picture.thumbnail}/>)}
                </table>
            </div>
        )
    }
}

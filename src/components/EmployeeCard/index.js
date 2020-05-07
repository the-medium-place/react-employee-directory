import React from 'react';
import "./style.css";

export default function EmployeeCard(props) {
    return (
        <div>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Cell Number</th>
            </tr>
            <tr>

                <td>
                    {props.firstName} {props.lastName}
                </td>
                <td>
                    {props.email}
                </td>
                <td>
                    {props.city}, {props.state}
                </td>
                <td>
                    {props.cell}
                </td>
            </tr>
        </div>
    )
}

import React from 'react';
import "./style.css";

export default function EmployeeCard(props) {
    return (
        < tr key={props.id}>
            <td>
                <img alt="Thumbnail Pic" src={props.picURL} />
            </td>
            <td>
                {`${props.firstName} ${props.lastName}`}
            </td>
            <td>
                {props.email}
            </td>
            <td>
                {`${props.city}, ${props.state}`}
            </td>
            <td>
                {props.cell}
            </td>
        </tr >

    )
}

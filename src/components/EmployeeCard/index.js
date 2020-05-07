import React from 'react';
import "./style.css";
import ListTD from '../ListTD'

export default function EmployeeCard(props) {
    return (
        < tr >
            <ListTD>
                <img src={props.picURL} />
            </ListTD>
            <ListTD>
                {`${props.firstName} ${props.lastName}`}
            </ListTD>
            <ListTD>
                {props.email}
            </ListTD>
            <ListTD>
                {`${props.city}, ${props.state}`}
            </ListTD>
            <ListTD>
                {props.cell}
            </ListTD>
        </tr >

    )
}

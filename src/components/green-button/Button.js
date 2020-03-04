import React, { Component } from 'react';

function Button(props) {
    return (
        <button onClick={props.action}> {props.name} </button>
    )
}

export default Button;
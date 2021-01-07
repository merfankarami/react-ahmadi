import React from 'react';

export const ButtonAdd = (props) => {
    return(
        <button onClick={props.click1}>Add Task!</button>
    );
};

export const ButtonDelete = (props) => {
    return (
        <button onClick={props.click2}>Delete</button>
    );
};


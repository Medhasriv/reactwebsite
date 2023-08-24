import React, { Component } from 'react';

//function to display a project
//parameters: name, small photo, description, links

export default function Display(props){
    return(
        <>
            <h2>Name: {props.projName}</h2>
            <p>{props.projDescription}</p>
            <p>{props.link}</p>
        </>
    );
}
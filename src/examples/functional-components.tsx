import React from "react";

type User = {
    firstName: string;
    lastName: string;
    clicked?: (message: string) => void;
}

interface IUser {
    firstName: string;
    lastName: string;
    clicked?: (message: string) => void;
}

export function FunctionalComponent() {

    let bruce = {firstName: "Bruce", lastName: "Wayne", clicked: console.log};

    return (
        <div>
            <UserDetails {...bruce}/>
            <UserDetails firstName="Clark" lastName="Kent" clicked={console.log}/>
        </div>
    );
}

function UserDetails(params: IUser) {
    return (
        <div>
            <div onClick={e => params.clicked ? params.clicked(params.firstName) : ""}>Firstname: {params.firstName}</div>
            <div>Lastname: {params.lastName}</div>
        </div>
    );
}
import React from 'react';
import Person from "./Person/Person";


const persons = (props) => {
    console.log('Persons.js render');
    return props.persons.map((person, index) => {

        return <Person name={person.name}
               age ={person.age}
               click={() => props.click(index)}
               key ={person.id}
               changed={(event) => props.change(event, person.id)}/>
    });
}

export default persons;
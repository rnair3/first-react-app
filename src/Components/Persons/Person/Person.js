import React from 'react';
// import Radium from 'radium';
import c from './Person.css';

const person = (props)=>{
    // const style = {
    //     '@media (min-width: 500px)' :{
    //         width: '450px'
    //     }
    // };
    console.log('Person.js render');
    return (
        <div className={c.Person}>
            <p onClick={props.click}>I'm a {props.name} and I'm {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>

    )
}

//export default Radium(person);
export default person;
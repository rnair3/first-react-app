import React, {useEffect} from 'react';
import classes from "./Cockpit.css";

const cockpit = (props) => {

    // useEffect(()=>{
    //     console.log('Cockpit.js useEffect');
    //     const timer = setTimeout(()=>{
    //         alert('save data');
    //     }, 1000);
    //     return ()=>{
    //            clearTimeout(timer);
    //         console.log('Cockpit cleanup');
    //     };
    // }, []);

    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.red;
    }

    if(props.showPersons) {
        if (props.personsLength <= 2) {
            assignedClasses.push(classes.red);
        }
        if (props.personsLength <= 1) {
            assignedClasses.push(classes.bold);
        }
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}> This is working</p>
            <button className={btnClass}
                    onClick={props.click}
            >Switch Name</button>
        </div>
    );
}

export default React.memo(cockpit);

import React, {Component} from 'react';
import Person from "./Person/Person";


class Persons extends Component{

    // static getDerivedStateFromProps(props, state){
    //     console.log('Persons.js getDerivedState');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('Persons.js shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Persons.js getSnapshotBeforeUpdate');
        return {message: 'Snapshot'};


    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Persons.js componentDidUpdate');
        console.log(snapshot);
    }

    // componentWillReceiveProps(nextProps, nextContext) {
    //     console.log('Persons.js componentwillrecieve', nextProps);
    // }
    //
    // componentWillUpdate(nextProps, nextState, nextContext) {
    //
    // }

    render(){
        console.log('Persons.js render');
        return this.props.persons.map((person, index) => {

            return <Person name={person.name}
                           age ={person.age}
                           click={() => this.props.click(index)}
                           key ={person.id}
                           changed={(event) => this.props.change(event, person.id)}/>
        });
    }

}

export default Persons;
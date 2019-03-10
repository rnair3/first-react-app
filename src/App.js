import React, { Component, useState } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            { name: 'Rinita', age:26},
            { name: 'Rahel', age:22},
            { name: 'Tarfa', age:26}
        ],
        showPersons: false
    }

    switchNameHandler = (newName) => {
        //console.log("was clicked");
        //DON"T DO THIS : this.state.persons[0].name="Rin"
        this.setState({
            persons: [
                { name: newName, age:26},
                { name: 'Rahel', age:22},
                { name: 'Tarfa', age:27}
            ]
        })
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                { name: 'newName', age:26},
                { name: event.target.value, age:22},
                { name: 'Tarfa', age:28}
            ]
        })
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }


  render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if(this.state.showPersons){
            persons = (
                <div>
                    {this.state.persons.map(person => {
                        return <Person name={person.name}
                                       age ={person.age} />
                    })}
                </div>

            );
        }

    return (
      <div className="App">
        <h1>First react app</h1>
        <button style={style}
            onClick={this.togglePersonsHandler}
        >Switch Name</button>

          {persons}

      </div>
    );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, I\'m React App'));
  }
}


/*const  app = props => {
    const [personState, setPersonState] = useState({   //array destructing
        persons: [
            { name: 'Rinita', age:26},
            { name: 'Rahel', age:22},
            { name: 'Tarfa', age:26}
        ]
    });

    const switchNameHandler = () => {
        //console.log("was clicked");
        //DON"T DO THIS : this.state.persons[0].name="Rin"
        setPersonState({
            persons: [
                { name: 'Rin', age:26},
                { name: 'Rahel', age:22},
                { name: 'Tarfa', age:27}
            ]
        })
    }

    return (
        <div className="App">
            <h1>First react app</h1>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personState[0].name} age={personState[0].age}>My hobbies is Racing</Person>
            <Person name={personState[1].name} age={personState[1].age}/>
            <Person name={personState[2].name} age={personState[2].age}/>
        </div>
    );
}*/
/*
<div>
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                        click={this.switchNameHandler.bind(this, 'Rin!!')}
                        changed = {this.nameChangeHandler}
                    >My hobbies is Racing</Person>
                    <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                    <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
                </div>
 */
export default App;

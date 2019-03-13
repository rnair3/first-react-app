import React, { Component, useState } from 'react';
import './App.css';
import Radium ,{StyleRoot} from 'radium';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            { id: 'ashjd', name: 'Rinita', age:26},
            { id: 'xzcn', name: 'Rahel', age:22},
            { id: 'dieiiu', name: 'Tarfa', age:26}
        ],
        showPersons: false
    }

    deletePersonHandler =(personIndex)=>{
        //const persons = this.state.persons;   //not to be used as we get the ref of state var may lead to unpredictable app
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    nameChangeHandler = (event, id) => {
        const  personIndex = this.state.persons.findIndex(per => {
           return per.id === id;
        });

        const person = {...this.state.persons[personIndex]};
        //const person = Object.assign({}, this.state.persons[personIndex])

        person.name = event.target.value;

        const persons =[...this.state.persons];

        persons[personIndex] = person;
        this.setState({
            persons: persons
        })
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }


  render() {

        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        let persons = null;

        if(this.state.showPersons){
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person name={person.name}
                                       age ={person.age}
                                       click={() => this.deletePersonHandler(index)}
                                        key ={person.id}
                                        changed={(event) => this.nameChangeHandler(event, person.id)}/>
                    })}
                </div>

            );

            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor:'salmon',
                color: 'black'
            };
        }

        const classes = [];
        if(this.state.persons.length <= 2){
            classes.push('red');
        }
        if(this.state.persons.length <= 1){
            classes.push('bold');
        }

    return (
        <StyleRoot>
      <div className="App">
          <h1>First react app</h1>
            <p className={classes.join(' ')}> This is working</p>
        <button style={style}
            onClick={this.togglePersonsHandler}
        >Switch Name</button>

          {persons}

      </div>
        </StyleRoot>
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
export default Radium(App);

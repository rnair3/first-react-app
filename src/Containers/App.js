import React, { Component, useState } from 'react';
import classes from './App.css';
//import Radium ,{StyleRoot} from 'radium';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {

    constructor(props){
        super(props);
        console.log('App.js constructor');
        // this.state = {
        //     persons: [
        //         { id: 'ashjd', name: 'Rinita', age:26},
        //         { id: 'xzcn', name: 'Rahel', age:22},
        //         { id: 'dieiiu', name: 'Tarfa', age:26}
        //     ],
        //     showPersons: false
        // }
    }

    state = {
        persons: [
            { id: 'ashjd', name: 'Rinita', age:26},
            { id: 'xzcn', name: 'Rahel', age:22},
            { id: 'dieiiu', name: 'Tarfa', age:26}
        ],
        showPersons: false
    }


    static getDerivedStateFromProps(props, state){
        console.log('App.js getderived ' , props);
        return state;
    }

    // componentWillMount() {
    //     console.log('App.js compWillMount');
    // }

    componentDidMount() {
        console.log('App.js componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('App.js shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('App.js componentDidUpdate');
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

        console.log('App.js render');

        // const style = {
        //     backgroundColor: 'green',
        //     color: 'white',
        //     font: 'inherit',
        //     border: '1px solid blue',
        //     padding: '8px',
        //     cursor: 'pointer'
        //     // ':hover': {
        //     //     backgroundColor: 'lightgreen',
        //     //     color: 'black'
        //     // }
        // };

        let persons = null;

        if(this.state.showPersons){
            persons = (
                    <Persons persons={this.state.persons}
                    click={this.deletePersonHandler}
                    change={this.nameChangeHandler}/>
            );



            // style.backgroundColor = 'red';
            // style[':hover'] = {
            //     backgroundColor:'salmon',
            //     color: 'black'
            // };
        }



    return (

      <div className={classes.App}>
            <Cockpit title={this.props.appTitle}
            showPersons={this.state.showPersons}
                     personsLength={this.state.persons.length}
            click={this.togglePersonsHandler}/>
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
//export default Radium(App);
export default App;
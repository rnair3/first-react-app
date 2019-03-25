import React, {Component} from 'react';
// import Radium from 'radium';
import c from './Person.css';

class Person extends Component{
    // const style = {
    //     '@media (min-width: 500px)' :{
    //         width: '450px'
    //     }
    // };

    render(){
        console.log('Person.js render');
        return (
            <div className={c.Person}>
                <p onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>

        );
    }

}

//export default Radium(person);
export default Person;
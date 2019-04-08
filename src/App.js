import React, { Component } from 'react';
import './App.css';
import { Button } from './Components/button';


class App extends Component {

  state = {
    diceBag: [6,5,7,8],
    diceRoll: 0, 
    rollHistory: [],
  }

 rollDie = (dice, i, rollHistory) => (e) => {
   console.log(dice[i])
   let roll = Math.floor(Math.random() * dice[i] +1)
   let rollMemory = rollHistory.push([roll])
   console.log(roll)
   console.log(rollHistory)
  this.setState({
    diceRoll: roll,
    rollHistory: rollMemory,
  })
 }

  render() {
    return (
      <div style={{textAlign: 'center',}}>
        <h1>Roll the dice</h1>
        <div>
          <ul>
            {this.state.diceBag.map((dice , i) => 
            
              <li style={{listStyleType:'none'}}>
                {dice}
                <Button onClick={this.rollDie(this.state.diceBag, i, this.state.rollHistory)}>Click me</Button>
              </li>
            )}
          </ul>
          <h4>
            You rolled a {this.state.diceRoll}
          </h4>
          <h4>
          Your roll history {this.state.rollHistory}
          </h4>
        </div>
      </div>
    );
  }
}

export default App;

import './App.css';
import React from 'react';
import DisplayOperation from './componenets/DisplayOperation';
import Buttons from './componenets/Buttons';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userInput: '',
      operation: '',
      button: '',
      result: '',

    }
  }


  displayTwoButton = (event) => {
    this.setState({

    })
  }

  operationResult = (result) => {
    this.setState({result: result})
  }

  
  clearInput = () => {
    console.log('the clear button works')
      this.setState({
      userInput: '',
    })
  }


  buttonValue = (event) => {
   console.log(event.target.value)
    //console.log(this.buttonValue)
  console.log('why is the number not displaying on my actual UI?')
  event.preventDefault()
  //const { button } = this.state
  //console.log(event.target.value)
  this.setState({
    button: event.target.value
  })

  }


  addOperation = (event) => {
    console.log('the add button works +++')
    event.preventDefault()
    const { userInput, operation } = this.state;

    if (operation === '+') {

      const nums = userInput.split('').map((num) =>Number(num))
      let sum = 0
      nums.forEach((num) => sum += num)
      

    }
      this.setState({
        operation: '+'
      })
    
  }


  render() {
    
    return (
      <>
      <div className="App">
        
        <DisplayOperation 
        //userInput={this.state.userInput}
        displayResult={this.state.buttonValue}

        />

        <Buttons 
        handleAddOperation={this.addOperation}
        firstButton={this.buttonValue}
        reset={this.clearInput}
        />

      </div>
      </>
    );
  
  }
}

export default App;

import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      number: 0
    }
  }

  handleClick = event => {
    setTimeout(() => {
      this.setState((prevState) => {
        console.log('setState1...', prevState)
        return { number: prevState.number + 1 }
      }, () => {
        console.log('setState1 callback', this.state)
      })
  
      console.log('after setState1', this.state) 
  
      this.setState((prevState) => {
        console.log('setState2...', prevState)
        return { number: prevState.number + 1 }
      }, () => {
        console.log('setState2 callback', this.state)
      })
       
      console.log('after setState2', this.state) 
    }, 4);
  }

  render(){
    console.log('render...', this.state)
    return (
      <div>
        计数器：{this.state.number}
        <div>
          <button onClick={this.handleClick}>add</button>
        </div>
      </div>
    )
  }
}
export default App;
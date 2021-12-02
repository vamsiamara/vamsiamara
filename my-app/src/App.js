
import React, { Component } from 'react';
import login from './login'


class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'hello',
      place: 'blr'
    }

  }

  handleClick = () => {
    console.log({ 'this': this })
    this.setState({  })

  }
  render() {
    const { name, place } = this.state
    return (
      <>
        <h2>Name.{name}</h2>
        <h2>{place}</h2>
        <button type="button" onClick={() =>this.handleClick()}>Change name </button>
        <div>hello vamsikrishna</div>
        <p>this is my first exercise</p>
        <login />
      </>
    )

  }
}

export default App;

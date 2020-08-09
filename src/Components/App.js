import React from 'react';
import ButtonWithToolTip from './ButtonWithToolTip';
import DropDown from './DropDown';

class App extends React.Component {

  // Intializing the state with position
  constructor() {
    super();
    this.state = {
      position: "top"
    }
  }

  //Handle drop down of positions
  handleDropDown = () => {
    let position = document.getElementById("position").value;
    this.setState({
      position
    })
  }

  render() {

    const { position } = this.state;
    return (
      <div className="App">
        {/* container for drop down and render button */}
        <div className="dropdown-container">
          <DropDown />
          <div className="render-button" onClick={() => this.handleDropDown()}>Render</div>
        </div>

        {/* container for button with tooptip */}
        <div class="button-container">
          <ButtonWithToolTip
            position={position}
          />
        </div>
      </div>
    );
  }
}


export default App;

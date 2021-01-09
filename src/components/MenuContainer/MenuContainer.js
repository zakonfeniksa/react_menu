import React, { Component } from 'react';
import './MenuContainer.css';

class MenuContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    this.setState({
      visible: !this.state.visible
    });
  }
  render(){
    return(
      <div>
        <div>
          <p>Który z poniższych elementów nie pasuje do pozostałych?</p>
          <ul>
            <li>Drzewo</li>
            <li>Trzcina</li>
            <li>Ryba</li>
            <li>Las</li>
            <li>Trawa</li>
            <li>Róża</li>
            <li>Pomidor</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MenuContainer;

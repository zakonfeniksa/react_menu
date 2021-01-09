import React, { Component } from 'react';
import './MenuContainer.css';
import MenuButton from '../MenuButton/MenuButton.js';

class MenuContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e){
    this.toggleMenu();
    console.log("clicked");
    e.stopPropagation();
  }

  toggleMenu(){
    this.setState({
      visible: !this.state.visible
    });
  }
  render(){
    return(
      <div>
        <MenuButton handleMouseDown={this.handleMouseDown} />
      </div>
    );
  }
}

export default MenuContainer;

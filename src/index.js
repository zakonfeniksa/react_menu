import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import MenuContainer from './components/MenuContainer/MenuContainer.js';

ReactDom.render(
  <MenuContainer/>,
  document.querySelector("#container")
);

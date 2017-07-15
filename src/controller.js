import React from 'react'
import ReactDOM from 'react-dom';
//Components
import Colors from './components/Colors/Colors';
import Chat from './components/Chat/Chat';
import Clicker from './components/Clicker/Clicker';

//ReactDOM.render(<Colors colorList={['blue','red','pink']}/>, document.querySelector('#example'));
ReactDOM.render(<Chat/>, document.querySelector('#example'));
//ReactDOM.render(<Clicker/>, document.querySelector('#example'));

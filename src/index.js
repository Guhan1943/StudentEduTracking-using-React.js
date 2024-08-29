import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Content from './components/content';
import Menu from './components/Menu';


function Main () {
  return(
    <div>

    <NavBar/>
    <Header/>
    <Content/>
    <Menu/>
    </div>

    );
}

ReactDOM.render(<Main/>,document.getElementById('root'));
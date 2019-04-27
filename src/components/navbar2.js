import React from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import { Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive} from 'semantic-ui-react';
  import {Link} from 'react-router-dom';
  import '../App.css';




class Menu1 extends React.Component{
  componentDidMount(){
  }
  render() {
    $(document).ready(function(){
      $('.hb-button').on('click',function(){
        $('nav ul').toggleClass('show');
      });
    });
    
    return (
    <div className="">
      <nav>
        <div className="logo">
        <h1 class="ui center aligned header"><Link to="/" Style="color: #0a0a0a"> Shop </Link></h1>
          <button className="hb-button" onClick={this.handleToggle}><i className="fa fa-bars"></i> </button>
        </div>
        <ul>
          <li> <Link  to={"/MensOuterwear"}>MensOuterwear</Link></li>
          <li> <Link  to={"/LadiesOuterwear"}>LadiesOuterwear</Link></li>
          <li> <Link  to={"/MensT-Shirts"}>MensT-Shirts</Link></li>
          <li> <Link  to={"/LadiesT-Shirts"}>LadiesT-Shirts</Link></li>
        </ul>
      </nav>
    </div>
    )}
    
}

export default Menu1;
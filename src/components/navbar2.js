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
  handleToggle = () =>{
    const el = findDOMNode(this.refs.toggle);
    $(el).slideToggle();
  }

  componentDidMount(){
  }
  render() {
    $(document).ready(function(){
      $('.hb-button').on('click',function(){
        $('nav ul').toggleClass('show');
      });
    });
    
    return (
    <div>

      <nav>
        <div className="logo">
          <h4>The Nav</h4>
          <button className="hb-button"><i className="fa fa-bars"></i> </button>
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
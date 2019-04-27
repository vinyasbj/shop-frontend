import React from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
  import {Link} from 'react-router-dom';
  import '../App.css';




class Menu1 extends React.Component{
  componentWillMount(){
    $(document).ready(function(){
      $('.hb-button').on('click',function(){
        $('nav ul').toggleClass('show');
      });
    });
  }
  render() {
    
    return (
    <div>
      <nav Style="z-index: 999; margin-top: -14px;">
        {/* <div className="logo"> */}
        <h1 className="ui center aligned header"><Link to="/" Style="color: #0a0a0a"> Shop </Link></h1>
          <button className="hb-button"><i className="fa fa-bars"></i> </button>
        {/* </div> */}
        <ul Style="margin-right: 26%;">
          <li> <Link  to={"/Admin/list_products"}>Admin</Link></li>
          <li> <Link  to={"/LadiesT-Shirts"}>LadiesT-Shirts</Link></li>
          <li> <Link  to={"/MensT-Shirts"}>MensT-Shirts</Link></li>
          <li> <Link  to={"/LadiesOuterwear"}>LadiesOuterwear</Link></li>
          <li> <Link  to={"/MensOuterwear"}>MensOuterwear</Link></li>
        </ul>
      </nav>
    </div>
    )}
    
}

export default Menu1;
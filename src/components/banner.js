import React from 'react';
// import Navbar from '../components/navbar';
import Menu1 from '../components/navbar2';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
// import NewNav from '../components/NewNavbar';
import {Segment,Grid} from "semantic-ui-react";
// import {Redirect} from "react-router-dom";
// import axios from 'axios'
// import api from '../config/api'
import '../App.css';


class Banner extends  React.Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: false
        }
        this.logout = this.logout.bind(this);
    }
    handleToggle = () =>{
        const el = findDOMNode(this.refs.toggle);
        $(el).slideToggle();
      }
    
    componentWillMount(){
        if(sessionStorage.getItem("userData")){
            console.log("user data present");
        }else{
            this.setState({redirect: true});
        }
    }

    logout(){
        sessionStorage.setItem("userData","");
        sessionStorage.clear();
    }
    render(){
        // if (sessionStorage.getItem("userData")){
        //     return (<Redirect to={'/login'}/>)
        //   }
        return(
            // <Container>
            <div>
                {/* <Navbar/> */}
                <Menu1/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                {/* <NewNav/> */}
                 <Segment placeholder Style="box-shadow: none; padding: unset" ref="toggle">
                    <img id="img" alt="Men's Outerwear" src="https://shop.polymer-project.org/esm-bundled/images/mens_outerwear.jpg"/>
                </Segment>
                <Segment placeholder Style="box-shadow: none; padding: unset; border: none; margin-top: -3%;">
                    <h4 className="item " Style= " margin-top: 3%;">Men's Outerwear</h4>
                    <button className="ui inverted secondary button ">SHOP NOW</button>
                </Segment>
                <Segment placeholder Style="box-shadow: none; padding: unset">
                    <img id="img" alt="Men's Outerwear" src="https://shop.polymer-project.org/esm-bundled/images/ladies_outerwear.jpg"/>
                </Segment>
                <Segment placeholder Style="box-shadow: none; padding: unset; border: none; margin-top: -3%;">
                    <h4 className="item" Style= " margin-top: 3%;">Ladies Outerwear</h4>
                    <button className="ui inverted secondary button ">SHOP NOW</button>
                </Segment>
                <Grid columns={2} stackable textAlign='center'>
                    <Grid.Row >
                        <Grid.Column Style="padding-left: 0rem; padding-right: 0rem;">
                            <img id="img" alt="Men's Outerwear" Style="opacity: 1; transition: opacity 0.5s ease 0s;margin-bottom: 40px; outline: none;  float: left; width: 126%; height: 73%;" src="https://shop.polymer-project.org/esm-bundled/images/mens_tshirts.jpg"/>
                            <h4 className="item" Style= " margin-top: 3%;">Men's T-Shirts</h4>
                            <button className="ui inverted secondary button ">SHOP NOW</button>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </Grid.Column>
                        <Grid.Column Style="padding-left: 0rem; padding-right: 0rem;">
                            <img id="img" alt="Men's Outerwear" Style="opacity: 1; transition: opacity 0.5s ease 0s; margin-bottom: 40px; outline: none;  float: left; width: 126%; height: 73%;" src="https://shop.polymer-project.org/esm-bundled/images/ladies_tshirts.jpg"/>
                            <h4 className="item" Style= " margin-top: 3%;">Ladies T-Shirts</h4>
                            <button className="ui inverted secondary button ">SHOP NOW</button>
                            <br/>
                            <br/>
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
            </div>
            // </Container>
        )
    }
}

export default Banner;
import React from 'react';
// import Navbar from '../components/navbar';
import Menu1 from '../components/navbar2';  
// import axios from 'axios'
// import api from '../config/api'
import {Redirect} from "react-router-dom";
import '../App.css';


class Home extends  React.Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: false
        }
        this.logout = this.logout.bind(this);
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
        return(
            <div>
            <Menu1/>
            </div>
        )
    }
}

export default Home;
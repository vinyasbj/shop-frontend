import React from 'react';
import '../App.css';
import { Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
class NewNav extends React.Component{
    state = { activeItem: "" }

    constructor(props){
        super(props);
        this.state = {
            redirect: false
        }
        this.logout = this.logout.bind(this);
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    logout(){
        sessionStorage.setItem("userData","");
        sessionStorage.clear();
    }
    render() {
        const { activeItem } = this.state
        // const isLoggedIn = this.redirect;
    return (
    <div>
        <br/>
        <h1 className="ui center aligned header"><Link to="/" Style="color: #0a0a0a"> Shop </Link></h1>
        <div class="ui secondary menu">
            <Menu.Item 
            as = {Link}
            to={"/MensOuterwear"}
            name="Men's Outerwear" 
            active={activeItem === "Men's Outerwear"} 
            onClick={this.handleItemClick} />
            <Menu.Item
                as={Link} 
                to={"/LadiesOuterwear"}
                name="Ladies Outerwear"
                active={activeItem === "Ladies Outerwear"}
                onClick={this.handleItemClick}
            />
            <Menu.Item
                as={Link} 
                to={"/MensT-Shirts"}
                name= "Men's T-Shirts"
                active={activeItem ===  "Men's T-Shirts"}
                onClick={this.handleItemClick}
            />
            <Menu.Item
                as={Link} 
                to={"/LadiesT-Shirts"}
                name="Ladies T-Shirts"
                active={activeItem ===  "Ladies T-Shirts"}
                onClick={this.handleItemClick}
            />
            <Menu.Item
                as={Link} 
                to={"/Admin/list_products"}
                name= "Admin"
                active={activeItem ===  "Admin"}
                onClick={this.handleItemClick}
            />
            {/* <div className="right menu">
            {isLoggedIn ? (
                <Menu.Item
                    as={Link} 
                    to={"/login"}
                    name= "Login"
                    active={activeItem ===  "Login"}
                    onClick={this.handleItemClick}
                />) : (
                <Menu.Item
                    as={Link} 
                    to={"/login"}
                    name= "Logout"
                    active={activeItem ===  "Logout"}
                    onClick={this.logout}
                /> )}
            </div> */}
        </div>
    </div>
    )}
}

export default NewNav;
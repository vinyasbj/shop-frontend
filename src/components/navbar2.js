import React from 'react';
import '../App.css';
import { Menu, Segment } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
class Menu1 extends React.Component{
    state = { activeItem: "" }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state

    return (<div>
    <br/>
    <h1 class="ui center aligned header"><Link to="/" Style="color: #0a0a0a"> Shop </Link></h1>
      <Segment Style="box-shadow: none; border: none;">
        <Menu pointing secondary>
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
            name= "Ladies T-Shirts"
            active={activeItem ===  "Ladies T-Shirts"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    </div>
    )}
}

export default Menu1;
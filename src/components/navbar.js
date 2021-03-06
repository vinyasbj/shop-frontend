import React from 'react'
import axios from 'axios'
import { Input, Menu} from 'semantic-ui-react'
import api from '../config/api'
import {Link} from 'react-router-dom';
import '../App.css';
// import Router from './router'
// import Home from '../components/home';
// import MensOuterwear from '../components/MensOuterwear';
// import LadiesOuterwear from '../components/LadiesOuterwear';
// import MensTShirts from '../components/MensTShirts';
// import LadiesTShirts from '../components/LadiesTShirts';
// import Product from './products';
class Navbar extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  constructor(props){
    super(props)
    this.state = {
      name: [],
      redirect: false
    }
  }

  logout(){
    sessionStorage.setItem("userData","");
    sessionStorage.clear();
  }

  componentDidMount(){
    axios.get(`${api.tickets.baseUrl}/categories`).then((response)=>{
        this.setState({
          name: response.data,
        })
        console.log('====================================')
        console.log(this.state.name)
        console.log('====================================')
    })
  }
  render() {
    const { activeItem } = this.state

    return (
      
      <div>
          <br/>
          <h1 class="ui center aligned header"><Link to="/" Style="color: #0a0a0a"> Shop </Link></h1>
            <Menu secondary >
            <Menu.Item as={Link} to={"/MensOuterwear"} name= {"Men's Outerwear"} active={activeItem ===  "Men's Outerwear" } onClick={this.handleItemClick} />
            <Menu.Item as={Link} to={"/LadiesOuterwear"} name= {"Ladies Outerwear"} active={activeItem ===  "Ladies Outerwear" } onClick={this.handleItemClick} />
            <Menu.Item as={Link} to={"/MensT-Shirts"} name= {"Men's T-Shirts"} active={activeItem ===  "Men's T-Shirts"} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to={"/LadiesT-Shirts"} name= {"Ladies T-Shirts"} active={activeItem ===  "Ladies T-Shirts" } onClick={this.handleItemClick} />
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                <Menu.Item
                  name='logout'
                  active={activeItem === 'logout'}
                  onClick={this.handleItemClick}
                />
              </Menu.Menu>
            </Menu>
      </div>
    )
  }
}

export default Navbar;
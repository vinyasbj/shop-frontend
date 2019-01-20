import React from 'react'
import axios from 'axios'
import { Input, Menu } from 'semantic-ui-react'
import api from '../config/api'
import '../App.css';
class Navbar extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  constructor(props){
    super(props)
    this.state = {
      name: []
    }
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
      <div className="ui grid">
        <div className="sixteen wide column" Style = {" text-align: center;"}><h1>Shopify</h1></div>
      </div>
        <div className="ui two column centered grid">
        <div className="column">
          <Menu secondary >
          {this.state.name.map(cat => {
            return <Menu.Item
              name= {cat.name} 
              active={activeItem ===  cat.name }
              onClick={this.handleItemClick}
            />
          })}
            
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
        </div>      
      </div>
    )
  }
}

export default Navbar;
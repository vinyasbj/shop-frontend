import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import { Grid, Segment } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import Menu1 from '../components/navbar2';
// import NewNav from '../components/NewNavbar';
import api from '../config/api';
import axios from 'axios';
import '../App.css';

class MensOuterwear extends  React.Component {
  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    constructor(props){
        super(props)
        this.state = {
          products: []
        }
      }

    componentDidMount(){
        axios.get(`${api.tickets.baseUrl}/categories/5c9a40ab738fd44d787cc1b2/products`).then((response)=>{
            this.setState({
              products: response.data,
            })
            console.log('====================================')
            console.log(this.state.products)
            console.log('====================================')
        })
      }
    render(){
        return( 
            <div>
            <Menu1/>
             <Segment placeholder Style="box-shadow: none; padding: unset">
                    <img id="img" alt="Men's Outerwear" src="https://shop.polymer-project.org/esm-bundled/images/mens_outerwear.jpg"/>
                </Segment>
                <Grid container columns={3}>
                {this.state.products.map(product => {
                  return <Grid.Column >
                   <Link to={{ 
                            pathname: `/product/${product._id}`,
                            state: { product: {id: product._id,name: product.name,price: product.price,description: product.description, stock: product.stock,image: "https://shop.polymer-project.org/esm-bundled/images/mens_outerwear.jpg" } }
                          }}>
                   <Image  src={product.productImage} />
                    <div className="content ">
                      <p className="header" Style= "text-align: center;">{product.name}</p>
                      <p Style= "text-align: center;">${product.price}</p>
                    </div> 
                    </Link>
                    </Grid.Column> 
                })}
                </Grid> 
            </div>
        )
    }
}
export default MensOuterwear;
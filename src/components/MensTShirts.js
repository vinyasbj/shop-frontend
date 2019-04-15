import React from 'react';
import {Link} from 'react-router-dom';
import {  Grid,Segment, Image } from 'semantic-ui-react';
import NewNav from '../components/NewNavbar';
import axios from 'axios';
import api from '../config/api';
// import Product from './products';
import '../App.css';

class MensTShirts extends  React.Component {
    constructor(props){
        super(props)
        this.state = {
          products: []
        }
      }

      componentDidMount(){
        axios.get(`${api.tickets.baseUrl}/categories/5c9a4a306cd29400246213fa/products`).then((response)=>{
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
            <NewNav/>
               <Segment placeholder Style="box-shadow: none; padding: unset">
               <img id="img" alt="Men's Outerwear" src="https://shop.polymer-project.org/esm-bundled/images/mens_tshirts.jpg"/>
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

export default MensTShirts;
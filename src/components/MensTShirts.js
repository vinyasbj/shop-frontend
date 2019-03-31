import React, { Component } from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import { Card, Grid,Icon,Segment, Image } from 'semantic-ui-react';
import Navbar from '../components/navbar';
import Menu1 from '../components/navbar2';
import axios from 'axios';
import api from '../config/api';
import Product from './products';
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
            {/* <Navbar/> */}
            <Menu1/>
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
                   <Image  src="https://shop.polymer-project.org/esm-bundled/data/images/10-14157A.jpg" />
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
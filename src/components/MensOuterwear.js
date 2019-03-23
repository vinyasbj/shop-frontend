import React, { Component } from 'react';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import '../App.css';
import { Grid, Segment } from 'semantic-ui-react';
import { Card, Icon, Image } from 'semantic-ui-react';
import Navbar from '../components/navbar';
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
        axios.get(`${api.tickets.baseUrl}/categories/5c40a166c09638100cd4c441/products`).then((response)=>{
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
            <Navbar/>
                <div className="ui grid button computer only">
                    <img id="img" alt="Men's Outerwear" Style="opacity: 1; transition: opacity 0.5s ease 0s;" src="https://shop.polymer-project.org/esm-bundled/images/mens_outerwear.jpg"/>
               </div> 
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
export default MensOuterwear;
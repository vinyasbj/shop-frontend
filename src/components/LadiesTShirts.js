import React, { Component } from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import { Card, Grid,Icon, Image } from 'semantic-ui-react';
import Navbar from '../components/navbar';
import axios from 'axios';
import api from '../config/api';
import '../App.css';

class LadiesOuterwear extends  React.Component {
    constructor(props){
        super(props)
        this.state = {
          products: []
        }
      }

      componentDidMount(){
        axios.get(`${api.tickets.baseUrl}/categories/5c4491f16887ae08f4894e4a/products`).then((response)=>{
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
                <div className="ui grid button">
                <img id="img" alt="Men's Outerwear" Style="opacity: 1; transition: opacity 0.5s ease 0s; margin-bottom: 40px; outline: none;  float: left; width: 126%; height: 73%;" src="https://shop.polymer-project.org/esm-bundled/images/ladies_tshirts.jpg"/>
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

export default LadiesOuterwear;
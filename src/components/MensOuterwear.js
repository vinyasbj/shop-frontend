import React, { Component } from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import '../App.css';
import { Grid, Segment } from 'semantic-ui-react';
import api from '../config/api';
import axios from 'axios';

class MensOuterwear extends  React.Component {

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
                <div className="ui grid bqwerty
                utton">
                    <img id="img" alt="Men's Outerwear" Style="opacity: 1; transition: opacity 0.5s ease 0s;" src="https://shop.polymer-project.org/esm-bundled/images/mens_outerwear.jpg"/>
               </div> 
               <Grid columns='equal'>
               <Grid.Row>
               {this.state.products.map(product => {

               return <Grid.Column>
                            <Segment>
                            <img id="img" Style="opacity: 1; transition: opacity 0.5s ease 0s;" alt="Men's Tech Shell Full-Zip" src="https://shop.polymer-project.org/esm-bundled/data/images/10-15068B.jpg"/>
                                <h4 Style="text-align: center;">{product.name}</h4>
                                <p Style="text-align: center;">${product.price}</p>
                            </Segment>
                        </Grid.Column>
                })}
                </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default MensOuterwear;
import React from 'react';
import {Link} from 'react-router-dom';
import {  Grid, Segment,Image } from 'semantic-ui-react';
// import Navbar from '../components/navbar';
import Menu1 from '../components/navbar2';
import axios from 'axios';
import api from '../config/api';
import '../App.css';
import NewNav from './NewNavbar';

class LadiesOuterwear extends  React.Component {
    constructor(props){
        super(props)
        this.state = {
          products: []
        }
      }

      componentDidMount(){
        axios.get(`${api.tickets.baseUrl}/categories/5c9a4a3c6cd29400246213fb/products`).then((response)=>{
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
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
               <Segment placeholder Style="box-shadow: none; padding: unset">
                <img id="img" alt="Ladies's Outerwear" src="https://shop.polymer-project.org/esm-bundled/images/ladies_tshirts.jpg"/>
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

export default LadiesOuterwear;
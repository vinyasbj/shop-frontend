import React, { Component } from 'react';
import axios from 'axios';
import api from '../config/api';
import Navbar from './navbar';
import {  Grid, Image, Segment ,Dropdown,Button} from 'semantic-ui-react';
// import './App.css';

class Product extends Component {
  state = {
    product: {}
  }
  componentDidMount(){
    console.log('============products=======================')
    console.log(this.props.location.state)
    console.log('===================================')
    const id = this.props.location.state.product.id;
    // const image = this.props.location.state.product.image;
    // const countryOptions = [
    //   { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
    //   { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
    //   { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
    //   { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' }]
    axios.get(`${api.tickets.baseUrl}/products/${id}`).then((response)=>{
      this.setState({
        product: response.data,
      })
      // const product = this.state.product;
      console.log('====================================')
      console.log(this.state.product)
      console.log('====================================')
  })
  }
  render() {
    return (
      <div>
      <Navbar/>
       <Segment Style="border: none;">
      <Grid columns={2} relaxed='very'>
        <Grid.Column>
          <p>
            <Image src= {this.state.product.productImage} />
          </p>
        </Grid.Column>
        <Grid.Column Style=" right: 100px; position: absolute; margin: 64px 32px; width: 50%; max-width: 400px; transition: opacity 0.4s;">
          <h2>{this.state.product.name}</h2>
          <p>${this.state.product.price}</p>
          <br/>
          <hr/>
          <Dropdown placeholder='Select Size' fluid search selection options={[{text: "M",value: "M" }]}/>
          <hr/>
          <Dropdown placeholder='Select Quantity' fluid search selection options={[ {text: "1",value: "1" },{text: "2",value: "2" }]}/>
          <br/>
          <p><b>Description</b></p>
          <p>{this.state.product.description}</p>
          <p>Features:</p>
            <li>100% polyester.</li>
            <li>Smooth, technical front with textured mesh back.</li>
            <li>Drawstring bottom for adjustable fit.</li>
            <li>Raglan sleeves.</li>
            <li>Available in forest green with the white Google logo embroidered at left chest.</li>
            <br/>
            <br/>
            <Button content='Add To Cart' secondary Style = "display: inline-block; box-sizing: border-box;border: 2px solid #000;background-color: #FFF; font-weight: 500;color: var(--app-primary-color);margin: 0;padding: 8px 44px;text-align: center;text-decoration: none;text-transform: uppercase;border-radius: 0;outline: none;" />
        </Grid.Column>
      </Grid>
    {/* <Divider vertical>And</Divider> */}
  </Segment>
      </div>
    );
  }
}


export default Product;

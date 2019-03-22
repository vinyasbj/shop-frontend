import React, { Component } from 'react';
import axios from 'axios';
import api from '../config/api';
// import './App.css';

class Product extends Component {
  state = {
    product: {}
  }
  componentDidMount(){
    console.log('============products=======================')
    console.log(this.props.location.state)
    console.log('===================================')
    const id = this.props.location.state.product.id
    axios.get(`${api.tickets.baseUrl}/products/${id}`).then((response)=>{
      this.setState({
        product: response.data,
      })
      console.log('====================================')
      console.log(this.state.product)
      console.log('====================================')
  })
  }
  render() {
    return (
      <div>
       <h1>Product ATOM</h1>
      </div>
    );
  }
}


export default Product;

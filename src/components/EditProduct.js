import React from 'react';
import {Link,Redirect} from 'react-router-dom';
// import Select from 'react-select';
import {
    Button,
    Checkbox,
    Form,
    Input,
    Select,
    TextArea,
  } from 'semantic-ui-react';
import api from '../config/api';
import axios from 'axios';

// const options = []

class EditProduct extends React.Component {
    // state = {}

    // handleChange = (e, { value }) => this.setState({ value })
    constructor(props){
        super(props)
        this.state = {
          name: "",
          price: "",
          stock: "",
          productImage: "",
          codEligible: false,
          description: "",
          category: "",
          selectedOption: "",
          redirect: false
        }
        this.onChange = this.onChange.bind(this);
        this.onUpload = this.onUpload.bind(this);
        this.submit = this.submit.bind(this);
      }

    onChange(e){
        this.setState({
            name: e.target.value
        })
        console.log(e.target);
        
    }
    onUpload(e){
        this.setState({productImage: e.target.files[0]})
    }
    
    submit(e){
        e.preventDefault();
        console.log(this.props.match.params.id);
        const id = this.props.match.params.id;
        console.log(this.state)
        const data = new FormData()
        data.append('productImage', this.state.productImage)
        data.append('name',this.state.name)
        data.append('price',this.state.price)
        data.append('stock',this.state.stock)
        data.append('category',this.state.category)
        data.append('description',this.state.description)
        data.append('codEligible',this.state.codEligible)
        // formData.append('productImage',this.state.productImage);
        
        console.log(data);
        axios.put(`${api.tickets.baseUrl}/products/${id}`,data )
        .then((response)=>{
            console.log(response.data);
            if(response.data.notice === "Successfully updated a product"){
                this.setState({redirect: true});
                console.log("added ");
              }else{
                console.log("error adding product");
              }
        })
    }

    componentDidMount(){
        console.log(this.props.match.params.id);
        const id = this.props.match.params.id;
        axios.get(`${api.tickets.baseUrl}/products/${id}`).then((response)=>{
            console.log(response.data)
            const product = response.data
            this.setState({
                name: product.name,
                price: product.price,
                stock: product.price,
                productImage: "",
                codEligible: product.codEligible,
                description: product.description,
                category: product.category.name,
                selectedOption: "",
                redirect: false
            })
        })
      }
    render() {
        if (this.state.redirect){
            return (<Redirect to={'/Admin/list_products'}/>)
          }
      return ( 
          <div>
            <h1 class="ui center aligned header"><Link to="/" Style="color: #0a0a0a"> Shop </Link></h1>
            <div  className= "ui container" > 
                <h3>Edit Product</h3>
                <Form onSubmit={this.submit}>
                <Form.Group widths='equal'>
                    <Form.Field
                    control={Input}
                    label='Product Name'
                    placeholder='Product name'
                    name="name"
                    value = {this.state.name}
                    onChange = { e => this.setState({ name : e.target.value }) }
                    />
                    <Form.Field
                    control={Input}
                    label='Price'
                    placeholder='Price'
                    value={this.state.price}
                    name= "price"
                    onChange = { e => this.setState({ price : e.target.value }) }
                    />
                    <Form.Field
                    control={Input}
                    label='Category'
                    value={this.state.category}
                    placeholder='Category'
                    name= "category"
                    onChange = { e => this.setState({ category : e.target.value }) }
                    />
                    {/* <Select
                    label='Categories'
                    options={options}
                    placeholder='Categories'
                    name="category"
                    value= {selectedOption}
                    onChange = {this.handleChange} 
                    /> */}
                    <Form.Field
                    control={Input}
                    label='Stock'
                    placeholder='Stock'
                    value={this.state.stock}
                    name="stock" 
                    onChange = { e => this.setState({ stock : e.target.value }) }
                    />
                    <Form.Field>
                        <label>File</label>
                        <input type="file" name="productImage" onChange={this.onUpload } />
                    </Form.Field>
                </Form.Group>
                <Form.Field
                    control={TextArea}
                    label='Description'
                    placeholder='Tell us more about product...'
                    value={this.state.description}
                    onChange = { e => this.setState({ description : e.target.value }) }
                    name = "description"
                />
                <Form.Field
                    control={Checkbox}
                    label='COD'
                    checked={this.state.codEligible}
                    value={this.state.codEligible}
                    onChange = { e => this.setState({ codEligible : !this.state.codEligible }) }
                    name = "codEligible"
                />
                <Form.Field control={Button} >Submit</Form.Field>
                </Form>
            </div>
          </div>
      )
    }
}

export default EditProduct;
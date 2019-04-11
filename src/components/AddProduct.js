import React from 'react';
import {Link} from 'react-router-dom';
import ImageUploader from 'react-images-upload';
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

class AddProduct extends React.Component {
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
        // console.log(picture[0])
        // e.preventDefault();
        
        // let file = e.target.files[0];
        this.setState({productImage: e.target.files[0]})
        // console.log(this.state.productImage)
    }
    
    submit(e){
        e.preventDefault();
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
        axios.post(`${api.tickets.baseUrl}/products`,data ,{product: this.state})
        .then((response)=>{
            console.log(response.data);
        })
    }

    // componentDidMount(){
        // axios.get(`${api.tickets.baseUrl}/categories`).then((response)=>{
        //     this.setState({
        //         categories: response.data
        //     })
        //     this.state.categories.map(category => {
        //         const c = {};
        //         c.text = category.name
        //         c.value = category._id
        //         options.push(c)
        //         console.log(c)
        //     })
        // })
    //   }
    render() {
      return ( 
          <div>
            <h1 class="ui center aligned header"><Link to="/" Style="color: #0a0a0a"> Shop </Link></h1>
            <div  className= "ui container" > 
                <Form onSubmit={this.submit}>
                <Form.Group widths='equal'>
                    <Form.Field
                    control={Input}
                    label='Product Name'
                    placeholder='Product name'
                    name="name"
                    onChange = { e => this.setState({ name : e.target.value }) }
                    />
                    <Form.Field
                    control={Input}
                    label='Price'
                    placeholder='Price'
                    name= "price"
                    onChange = { e => this.setState({ price : e.target.value }) }
                    />
                    <Form.Field
                    control={Input}
                    label='Category'
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
                    onChange = { e => this.setState({ description : e.target.value }) }
                    name = "description"
                />
                <Form.Field
                    control={Checkbox}
                    label='COD'
                    checked={this.state.codEligible}
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

export default AddProduct;
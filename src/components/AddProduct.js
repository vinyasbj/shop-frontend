import React from 'react';
import {Link} from 'react-router-dom';
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

const options = []

class AddProduct extends React.Component {
    // state = {}

    // handleChange = (e, { value }) => this.setState({ value })
    constructor(props){
        super(props)
        this.state = {
          categories: [],
          name: "",
          price: "",
          stock: "",
          productImage: "",
          codEligible: "",
          description: "",
          category: "",
          selectedOption: "",
          redirect: false
        }
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
      }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
        // console.log(e.target.name)
        // console.log(e.target.value)
    }
    
    submit(){
        console.log(this.state)
        axios.post(`${api.tickets.baseUrl}/products`,this.state.toString()).then((response)=>{
            console.log(response.data);
        })
    }

    componentDidMount(){
        axios.get(`${api.tickets.baseUrl}/categories`).then((response)=>{
            this.setState({
                categories: response.data
            })
            this.state.categories.map(category => {
                const c = {};
                c.text = category.name
                c.value = category._id
                options.push(c)
                console.log(c)
            })
        })
      }
    render() {
      return ( 
          <div>
            <h1 class="ui center aligned header"><Link to="/" Style="color: #0a0a0a"> Shop </Link></h1>
            <div  className= "ui container" > 
                <Form>
                <Form.Group widths='equal'>
                    <Form.Field
                    control={Input}
                    label='Product Name'
                    placeholder='Product name'
                    name="name"
                    onChange = {this.onChange} 
                    />
                    <Form.Field
                    control={Input}
                    label='Price'
                    placeholder='Price'
                    name= "price"
                    onChange = {this.onChange} 
                    />
                    <Form.Field
                    control={Input}
                    label='Category'
                    placeholder='Category'
                    name= "category"
                    onChange = {this.onChange} 
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
                    onChange = {this.onChange}
                    name="stock" 
                    />
                    <Form.Field>
                        <label>File</label>
                        <input type="file" name="productImage" onChange={this.onChange} />
                    </Form.Field>
                </Form.Group>
                <Form.Field
                    control={TextArea}
                    label='Description'
                    placeholder='Tell us more about product...'
                    onChange = {this.onChange}
                    name = "description"
                />
                <Form.Field
                    control={Checkbox}
                    label='COD'
                    onChange = {this.onChange}
                    name = "codEligible"
                />
                <Form.Field control={Button} onClick= {this.submit}>Submit</Form.Field>
                </Form>
            </div>
          </div>
      )
    }
}

export default AddProduct;
import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react';
import api from '../config/api';
import axios from 'axios';


class ListProduct extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        axios.get(`${api.tickets.baseUrl}/products`).then((response)=>{
            this.setState({
              products: response.data,
            })
            console.log('====================================')
            console.log(this.state.products)
            console.log('====================================')
        })
      }    
    render(){
        return( <div>

            <h1 class="ui center aligned header"><Link to="/" Style="color: #0a0a0a"> Shop </Link></h1>
            <div className= "ui container">
                <Table compact celled definition>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Category</Table.HeaderCell>
                    <Table.HeaderCell>Code</Table.HeaderCell>
                    <Table.HeaderCell>Price</Table.HeaderCell>
                    <Table.HeaderCell>Cod Eligible</Table.HeaderCell>
                    <Table.HeaderCell>Created At</Table.HeaderCell>
                    <Table.HeaderCell>Show</Table.HeaderCell>
                    <Table.HeaderCell>Edit</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                {this.state.products.map(product => {
                  return <Table.Row>
                    <Table.Cell collapsing>
                    <Checkbox slider />
                    </Table.Cell>
                    <Table.Cell>{product.name}</Table.Cell>
                    <Table.Cell>{product.category.name}</Table.Cell>
                    <Table.Cell>{product.code}</Table.Cell>
                    <Table.Cell>${product.price}</Table.Cell>
                    <Table.Cell>{product.codEligible}</Table.Cell>
                    <Table.Cell>{product.createdAt}</Table.Cell>
                    <Table.Cell><Button size='small'  as={Link} to={"/Admin/show_product"} >Show</Button></Table.Cell>
                    <Table.Cell><Button size='small'  as={Link} to={`/Admin/edit_product/${product._id}`} >Edit</Button></Table.Cell>
                    </Table.Row>
                })}
                </Table.Body>

                <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell colSpan='6'>
                    <Button floated='right' icon labelPosition='left' as={Link} to={"/Admin/add_product"} primary size='small'>
                        <Icon name='user' /> Add Product
                    </Button>
                    <Button size='small'>Approve</Button>
                    <Button disabled size='small'>
                        Approve All
                    </Button>
                    </Table.HeaderCell>
                </Table.Row>
                </Table.Footer>
            </Table> 
            </div>
            </div>
        )
    }
}

export default ListProduct;
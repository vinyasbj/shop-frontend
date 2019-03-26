import React, { Component } from 'react';
import { Button, Divider,Container, Form, Grid, Segment } from 'semantic-ui-react';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import api from '../config/api';
import axios from 'axios';
class Login extends  React.Component {
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
        return <div >
         <div className="sixteen wide column" Style = {" text-align: center;"}><h1><b><Link to="/" Style="color: #0a0a0a"> Shop</Link></b></h1></div>
        <Container Style= "position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);width: 40%; height: 50%;" >
             <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form>
          <Form.Input icon='user' iconPosition='left' label='Username' placeholder='Username' />
          <Form.Input icon='lock' iconPosition='left' label='Password' type='password' />

          <Button content='Login' primary />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button content='Sign up' icon='signup' size='big' />
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
  </Container>
        </div>
    }
}

export default Login;

// vin@mail.com
// vinyasbj
import React from 'react';
import { Button, Divider,Container, Form, Grid, Segment } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import api from '../config/api';
import axios from 'axios';

class Login extends  React.Component {
    constructor(props){
      super(props);
      this.state = {
        email: "",
        password: ""
      }
      this.login = this.login.bind(this);
      this.onChange = this.onChange.bind(this);
    }

    login(){
      console.log('====================================')
      console.log(this.state)
      console.log("login fuction")
      console.log('====================================')
      axios.post(`${api.tickets.baseUrl}/users/login`, { email: "vinyas555@gmail.com",password: "12345678"}).then((response)=>{
        
          // return response.data
          // console.log('====================================')
          console.log(response.headers);
          console.log(response.data);
          
    })
    }

    onChange(e){
      this.setState({[e.target.name]: e.target.value})
      // console.log( this.state)
    }

    // componentDidMount(){
    //     axios.get(`${api.tickets.baseUrl}/users/login`).then((response)=>{
    //         this.setState({
    //           user: response.data,
    //         })
    //         console.log('====================================')
    //         console.log(this.state.products)
    //         console.log(response.headers);
    //         console.log('====================================')
    //     })
    //   }
    render(){
        return <div >
         <div className="sixteen wide column" Style = {" text-align: center;"}><h1><b><Link to="/" Style="color: #0a0a0a"> Shop</Link></b></h1></div>
        <Container Style= "position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);width: 40%; height: 50%;" >
             <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form>
          <Form.Input icon='user' iconPosition='left'  name= "email" label='Username' placeholder='Username' onChange = {this.onChange} />
          <Form.Input icon='lock' iconPosition='left'  name= " password" label='Password' type='password'  onChange = {this.onChange} />

          <Button content='Login' onClick= {this.login} primary/>
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
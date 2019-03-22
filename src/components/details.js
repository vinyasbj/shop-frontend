import React from 'react'
import {Link} from 'react-router-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Grid, Segment } from 'semantic-ui-react';
function Detail(props){
    // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    console.log('====================================')
    console.log(props)
    console.log('====================================')
    return(
        <Grid.Column >
        <Link to={{pathname: `/Products/${props.id}`,state: {
            product :{
                id: props.id,
                name: props.name,
                price: props.price,
                description: props.description
            }
        }
        }}> 
        <Image  src="https://shop.polymer-project.org/esm-bundled/data/images/10-14157A.jpg" />
                    <div className="content ">
                      <p className="header" Style= "text-align: center;">{props.name}</p>
                      <p Style= "text-align: center;">${props.price}</p>
                    </div> 
                    </Link>
                    </Grid.Column> 
    )
}

export default Detail
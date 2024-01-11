import React, { Component } from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import { FaDisplay } from 'react-icons/fa6'




let apiKey= '5c76e2df'
export default class FilmsGallery extends Component {
    
    state= {
      filmArr: []
    }
    
    componentDidMount = async () => {
        try {
            const response = await fetch('http://www.omdbapi.com/?apikey='+apiKey+'&s='+this.props.saga)
            if(response.ok) {
                const data = await response.json()
                
                this.setState({filmArr: data.Search})
                
            }else {
                console.log('error while fetching')
            } 
        }
        catch(e) { console.log(e) }}
        
    render() {
    return (
        <>
        <p className='fs-3 fw-semibold mt-3'>{this.props.claim}</p>
        {console.log(this.state)}
        <Row>
          {this.state.filmArr.map(f =>  <Col xs={12} sm={6} lg={3} xl={2} className='my-3 filmPoster'>
                                            <Image src={f.Poster} alt={f.Title} fluid className='' />
                                        </Col>)}
        </Row>
        
      
        </>
    )
  }
}

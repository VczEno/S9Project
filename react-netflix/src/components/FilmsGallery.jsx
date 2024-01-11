import React, { Component } from 'react'
import { Col, Row, Image, Spinner, Alert } from 'react-bootstrap'


let apiKey= '5c76e2df'


export default class FilmsGallery extends Component {
    
    state= {
      filmArr: [],
      isLoading: false,
      errMsg:false
    }
    
    componentDidMount = async () => {
        this.setState({isLoading: true})
        try {

            const response = await fetch('http://www.omdbapi.com/?apikey='+apiKey+'&s='+this.props.saga)
            if(response.ok) {
                const data = await response.json()
                
                this.setState({filmArr: data.Search, isLoading:false})
                
            }else {
                console.log('error while fetching')
                this.setState({errMsg:true})
            } 
        }
        catch(e) { 
            this.setState({isLoading:false, errMsg:true})
            console.log(e) }}
        
    render() {
    return (
        <>
        {this.state.isLoading && (
         <div className='ml-2 text-center'>
            <Spinner animation='border' variant='secondary'></Spinner>
         </div>   
        )}

        {this.state.errMsg &&
                <Alert variant="warning">
                Si è verificato un errore nel caricamento dei dati
                </Alert> 
            }
            {/* Rivedere gestione dell'errore, se errMsg true non dovrebbe entrare sotto invece mosta errore map (undefined) */}
            {!this.state.errMsg && (
                <>
                <p className='fs-3 fw-semibold mt-3'>{this.props.claim}</p>
                {console.log(this.state)} 
                <Row className=''>
                {this.state.filmArr.map(f =>  <Col xs={12} sm={6} lg={3} xl={2} className='my-3 filmPoster d-flex justify-content-center'>
                                                    <Image src={f.Poster} alt={f.Title} fluid className='' />
                                                </Col>)}
                </Row>
            </>

            ) }

       
      
        </>
    )
  }
}

/* export default class FilmsGallery extends Component {
    
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
        <Row className=''>
          {this.state.filmArr.map(f =>  <Col xs={12} sm={6} lg={3} xl={2} className='my-3 filmPoster d-flex justify-content-center'>
                                            <Image src={f.Poster} alt={f.Title} fluid className='' />
                                        </Col>)}
        </Row>
        
      
        </>
    )
  }
}
 */

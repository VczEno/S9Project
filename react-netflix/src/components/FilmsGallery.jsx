import React, { useEffect, useState } from 'react'
import { Col, Row, Image, Spinner, Alert, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'




let apiKey = '5c76e2df' /* modificando la stringa la chiamata non andràa buon fine e apparirà l'alert */


export default function FilmsGallery(props) {

    const [filmArr, setFilmArr] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errMsg, setErrMsg] = useState(false)
    const navigate = useNavigate() 
    useEffect(() => {

        setIsLoading(true)

        async function fetchData() {
            
            try {

                const response = await fetch('http://www.omdbapi.com/?apikey=' + apiKey + '&s=' + props.saga)
                if (response.ok) {
                    const data = await response.json()
                    setFilmArr([...data.Search])
                    console.log(data.Search)
                    console.log(filmArr)
                    setIsLoading(false)

                } else {
                    console.log('error while fetching')
                    setErrMsg(true)
                }
            }
            catch (e) {
                setIsLoading(false)
                setErrMsg(true)
                console.log(e)
            }
        }
        fetchData()
    }, [] )

    return (
        <>
            {isLoading && (
                <div className='ml-2 text-center'>
                    <Spinner animation='border' variant='secondary'></Spinner>
                </div>)}


            <p className='fs-3 fw-semibold mt-3'>{props.claim}</p>

            <Row className=''>
                {filmArr.map(f => <Col key={f.imdbID} xs={12} sm={6} lg={3} xl={2} className='my-3 filmPoster d-flex flex-column justify-content-center'>
                    <Image src={f.Poster} alt={f.Title} fluid className='' onClick={() => navigate('/movieDetail/'+f.imdbID)} /> 
                </Col>)}
            </Row>

            {errMsg && (
                <Alert variant='dark' className='my-3'>
                    Si è verificato un errore al caricamento della sezione, ti invitiamo a riprovare più tardi
                </Alert>)}
        </>
    )
}


/* export default class FilmsGallery extends Component {

    state = {
        filmArr: [],
        isLoading: false,
        errMsg: false
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })
        try {

            const response = await fetch('http://www.omdbapi.com/?apikey=' + apiKey + '&s=' + this.props.saga)
            if (response.ok) {
                const data = await response.json()

                this.setState({ filmArr: data.Search, isLoading: false })

            } else {
                console.log('error while fetching')
                this.setState({ errMsg: true })
            }
        }
        catch (e) {
            this.setState({ isLoading: false, errMsg: true })
            console.log(e)
        }
    }

   




    render() {
        if (this.state.errMsg === false) {
            return (
                    <>
                        {this.state.isLoading && (
                            <div className='ml-2 text-center'>
                                <Spinner animation='border' variant='secondary'></Spinner>
                            </div>)}


                        <p className='fs-3 fw-semibold mt-3'>{this.props.claim}</p>
                        {console.log(this.state)}
                        <Row className=''>
                            {this.state.filmArr.map(f => <Col key={f.imbdID}  xs={12} sm={6} lg={3} xl={2} className='my-3 filmPoster d-flex flex-column justify-content-center'>
                                <Image src={f.Poster} alt={f.Title} fluid className='' />
                                <Button variant='outline-danger'>Details</Button>
                            </Col>)}
                        </Row>
                    </>
                    )
        } else {

       
        return (
            <Alert variant='dark' className='my-3'>
                Si è verificato un errore al caricamento della sezione, ti invitiamo a riprovare più tardi
            </Alert>
            )
        }




            
       
    }
} */
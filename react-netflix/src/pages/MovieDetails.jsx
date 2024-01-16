import React from 'react'
import { useState, useEffect } from 'react'
import { Alert, Container, Image, ListGroup, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

let apiKey = '5c76e2df'
export const MovieDetails = () => {
    
  const param= useParams()
  
  const [film, setFilm]= useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errMsg, setErrMsg] = useState(false)


  useEffect(() => {
   async  function fetchData() {
        setIsLoading(true)
        try {

            const response = await fetch('http://www.omdbapi.com/?apikey=' + apiKey + '&i=' + param.id)
            if (response.ok) {
                const data = await response.json()
                setFilm(data)
                console.log(data)
                console.log(film)
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
    
  }, [])
  
  
    return (
    <Container >
     
    
    <Alert variant='info'>Movie detail, id: {param.id}</Alert>

    {isLoading && (
                <div className='ml-2 text-center'>
                    <Spinner animation='border' variant='secondary'></Spinner>
                </div>)}
      {!isLoading && (
        <ListGroup horizontal data-bs-theme='dark' >
      <ListGroup.Item>{film.Title}</ListGroup.Item>
      <ListGroup.Item>
        <Image fluid src={film.Poster}></Image>
        
        </ListGroup.Item>
      <ListGroup.Item>{film.Director}</ListGroup.Item>
      <ListGroup.Item>{film.Year}</ListGroup.Item>
    </ListGroup>

      )}
  

      {errMsg && (
                <Alert variant='dark' className='my-3'>
                    Si è verificato un errore al caricamento della sezione, ti invitiamo a riprovare più tardi
                </Alert>)}

      </Container>
  )
}

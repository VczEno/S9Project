import React from 'react'
import { Alert, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
  return (
    <>
    <Alert variant='warning'>Pagina non trovata</Alert>
    <Link to='/TvShows'><Button variant='light'>Torna a Tv Shows</Button></Link>
    </>
  )
}

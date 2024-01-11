import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import FilmsGallery from './FilmsGallery'
import { IoGridSharp } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";


export default class Main extends Component {
  render() {
    return (
      <div className='mx-4 text-light'>
        <div>
            <h1 className='fs-2 d-inline'>Movies</h1>
            <Form.Select className='rounded-0 genre d-inline mx-3' >
            <option >Genres</option>
            <option value="1">Comedy</option>
            <option value="2">Drama</option>
            <option value="3">Thriller</option>
            </Form.Select>
        <div className='float-end gridOpt'>
        <IoGridSharp className='mx-2' />
        <BsFillGrid3X3GapFill className='mx-2'/>
        </div>
        </div>
       
        <FilmsGallery saga={'planet%20of%20the%20apes'} claim={'In attesa della prossima catastrofe'} />
        <FilmsGallery saga={'shrek'} claim={'Meglio fuori che dentro'}/>
        <FilmsGallery saga={'natale%20a'} claim={'Pi pa pa para po'} />


      </div>
    )
  }
}

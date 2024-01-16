import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from "./components/Header"

import Footer from "./components/Footer"
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { TvShows } from './pages/TvShows';
import { PageNotFound } from './pages/PageNotFound';
import { MovieDetails } from './pages/MovieDetails';

function App() {
  return (
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/TvShows' element={<TvShows/>}/>
          <Route path='/movieDetail/:id' element={<MovieDetails/>}/>
          <Route path='*' element={<PageNotFound/>}/>
          
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;

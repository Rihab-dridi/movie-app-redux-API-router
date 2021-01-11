import React,{useState,useEffect} from 'react';
import './App.css';
import Search from './components/Search/search';
import MovieList from './components/MovieList/MovieList';
import Add from './components/Add/Add';
import DetailList  from './components/Details/DetailsList';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './NavBar/NavBar';
import DetailCard from './components/Details/DetailCard';
import axios from 'axios'


function App() {

  return (
    <div className="App">
      <Router>
                  <NavBar/>
                  <Search/>
              
                  
                  <Route exact path='/'
                  render={()=> <img 
                  src="https://www.pngmart.com/files/5/Movie-PNG-Image.png"></img>}/>

                  
                  <Route
                   path='/Movies'
                   render={()  => ( <MovieList/>)}
                   />
                  <Route path='/Detail-List'>
                   <DetailList />
                   </Route>
                   
                  
                 
                  <Route path='/Detail/:ID' >
                    <DetailCard/>
                  </Route>
                  

                
                 
                  
                  
              
      </Router>
    </div>
  );
}

export default App;

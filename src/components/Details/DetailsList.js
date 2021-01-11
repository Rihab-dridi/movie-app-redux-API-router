import React,{component} from 'react';
import Details from './Details';
import{ useSelector} from 'react-redux'

import '../MovieList/MovieList.css';
import './Details.css'


const MovieList = ()=>{
    const movies=useSelector(state=> state.movieList)
    const search=useSelector(state=>state.searchName)
    const rating=useSelector(state=>state.searchRate)
    return (
        <div >
            
            <div >
            
            <div className="List"  > 
            {movies
        .filter(
          (el) =>
            el.title.toLowerCase().includes(search.toLowerCase().trim()) && el.rate >= rating
        )
                .map((movie,i)=> <Details key ={i} movie={movie} />)}
            </div>
            
        </div>
        </div>
    
    
    )}

export default MovieList
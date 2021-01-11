import axios from 'axios'
import MovieCard from './MovieCard';
import {useSelector,useDispatch} from 'react-redux';
import ReactSpinner from 'react-bootstrap-spinner';
import { Accordion } from '@material-ui/core';

import './MovieList.css';
import { useEffect,useState } from 'react';
import { display } from '../../redux/Actions/Action';
import Add from '../Add/Add';


const MovieList = ()=>{
    const[loading,setLoading]=useState(null)

    const dispatch=useDispatch()
    const movies=useSelector(state=> state.movieList)
    // const todos = useSelector(state => state.todos)
    const search=useSelector(state=>state.searchName)
    const rating=useSelector(state=>state.searchRate)


    useEffect(()=>{
        const fetchData=()=>{
          axios.get("https://movie-app-gmc.herokuapp.com/api/movies")
          .then(responde=>dispatch(display(responde.data)))
          .catch (error=>alert(error))
        }
        fetchData()},[]
    )
 


   
    return (
        <div >
            
            <div >
            <div className="List"  > 
            {movies && (movies
        .filter(
          (el) =>
            el.title.toLowerCase().includes(search.toLowerCase().trim()) && el.rate >= rating
        )
                .map((movie)=> <MovieCard key ={movie._id} movie={movie} />))}
            <Add/>  
            </div>
            </div>
            {!movies && (dispatch(display(<div style={{color:"red"}}>...loading</div>)))}
            
        </div>
    
    
    )}

export default MovieList
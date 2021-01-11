import React,{component} from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { delet } from '../../redux/Actions/Action';
import Edit from '../Edit' ;
import './MovieList.css'

const MovieCard = ({movie})=>{
     const array=[]
     const array2=[]
      array.length= movie.rate
      array2.length= 5 -movie.rate
      const dispatch=useDispatch()
    return (
        
        
        <div  >
            <div className="MovieCard">
            
                <button className="movie" >
                
                    <>
                   <img className="poster" src={movie.imgUrl} alt="poster"/>
                    <div className="title" ><h6 >{movie.title}</h6></div>
                   <span>{ array.fill(<i className="fas fa-star"></i>).concat(array2.fill(<i className="far fa-star"></i>))}</span>
                   <p>{movie.category}</p>
                   </>

                 <Link to={`/Detail/${movie._id}`}>
                <button  className="detail-btn" > Details <i class="fas fa-angle-double-right"></i>  </button><br/>
                </Link>
                
                <button  className="delete-btn" onClick={()=>{dispatch(delet(movie._id))}} > 
                <i class="far fa-minus-square"></i>
                 </button>
                 
                <Edit movie={movie}/>
                </button>
                
            </div> 
        </div>
    
    
    )}

export default MovieCard 
import React from 'react';
import {useParams} from 'react-router-dom';
import{ useSelector} from 'react-redux'
import {Link} from 'react-router-dom';
import '../MovieList/MovieList.css';
import './Details.css'

const DetailCard = ()=>{
    const movies=useSelector(state=> state.movieList)
    const {ID}=useParams();
    const array=[]
    const array2=[]
    array.length= movies.find(movie=> movie._id==ID).rate
    array2.length= 5 - movies.find(movie=> movie._id==ID).rate
    
   console.log(movies)

    return (
        <div className="DetailCard" >
                  <div>
                         <img className="poster" src={movies.find(movie=> movie._id==ID).imgUrl} alt="poster"/>
                         <h6 className="title"  style={{color:"gold"}}>{movies.find(movie=> movie._id==ID).title}</h6>
                          <span>{ array.fill(<i className="fas fa-star"></i>).concat(array2.fill(<i className="far fa-star"></i>))}</span> 
                         <p>{(movies.find(movie=> movie._id==ID)).category}</p>
                   </div>

                     <div className="Details">
                         <h2 style={{color:"gold"}} >Description</h2>
                         <p style={{color:"white"}}> {(movies.find(movie=> movie._id==ID)).description}</p>
                         {/* <iframe className="video" width="660" height="415" 
                          src={(movies.find(movie=> movie._id==ID)).trailer}
                          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                         </iframe> <br/> */}
                          <Link to='/Movies/Add'>
                         <button className="back-btn"><i class="fas fa-angle-double-left"> Back </i></button>
                         </Link>

                    </div>
                         
            
       

            
        </div>
    
    
    )}

export default DetailCard ; 
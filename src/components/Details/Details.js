import React,{component} from 'react';
import './Details.css'
const MovieCard = ({movie})=>{
    
    const array=[]
    const array2=[]
     array.length= movie.rate
     array2.length= 5 -movie.rate

    return (
   
            <div className="DetailCard">
                
                    <div>
                         <img className="poster" src={movie.imgUrl} alt="poster"/>
                         <h6 className="title" >{movie.title}</h6>
                         <span>{ array.fill(<i className="fas fa-star"></i>).concat(array2.fill(<i className="far fa-star"></i>))}</span>
                         <p>{movie.category}</p>
                    </div>
                   <div className="Details">
                         <h2 style={{color:"gold"}} >Description</h2>
                         <p style={{color:"white"}}> {movie.description}</p>
                         {/* <iframe className="video" width="660" height="415" 
                          src={movie.trailer}
                          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                         </iframe> */}
                    </div>
                
                
            </div> 

            
      
    
    
    )}

export default MovieCard 
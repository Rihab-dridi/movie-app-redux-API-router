import React,{useState} from 'react';
import Rate from '../rate';
import {search_name} from '../../redux/Actions/Action'
import {useDispatch} from 'react-redux'
import './search.css';

const Search = ()=>{
    
      const dispatch=useDispatch()
      const searchHandler=(e)=>{
          dispatch(search_name((e.target.value) )) 
        
    }
  
    return (
        <div >

           
            <div className="search-bar">
         <span className="search-frag">
            <input 
            type="text"
            placeholder="Search"
             onChange={searchHandler}
            className="search"
            autoFocus
            /> 
           </span>
            <Rate /> 
            </div>
            
        </div>
    
    
    )}

export default Search
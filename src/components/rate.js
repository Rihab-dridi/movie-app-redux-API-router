import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import { search_rate } from '../redux/Actions/Action';
import './Search/search.css'


const Rate = ()=>{
    let arr = Array(5).fill(<i className="fas fa-star"></i>)
    
    const [show,setShow] =useState(false)
    const dispatch=useDispatch()
    const rateHandler=(x)=>{
        dispatch(search_rate(x))
    }
    return (
        <div className="Rate" >
            <button onClick={()=> dispatch(search_rate(1))} className="star-btn">{arr[0]}</button>
            <button onClick={()=> dispatch(search_rate(2))} className="star-btn">{arr[1]}</button>
            <button onClick={()=> dispatch(search_rate(3))} className="star-btn">{arr[2]}</button>
            <button onClick={()=> dispatch(search_rate(4))} className="star-btn">{arr[3]}</button>
            <button onClick={()=> dispatch(search_rate(5))} className="star-btn">{arr[4]}</button> 
            
            
        </div>
    
    
    )}

export default Rate 
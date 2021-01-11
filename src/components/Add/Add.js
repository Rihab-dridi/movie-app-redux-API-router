import React,{component, useState} from 'react';

import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { add_btn, add } from '../../redux/Actions/Action';
import'./Add.css'
Modal.setAppElement('#root')

const Add = ()=>{
    const dispatch=useDispatch()
    const addBtn=useSelector(state=> state.addBtn)
// inputes local states 
const[title,setTitle]=useState('')
const[rate,setRate]=useState('')
const[img,setImg]=useState('')
const[description,setDescription]=useState('')
const[detail,setDetail]=useState('')
//const[trailer,setTrailer]=useState('')

// to handle the Modal
 const addHandler = ()=>{
 dispatch(add_btn())
 }


 const input =()=>{
  dispatch (add({_id:Math.random(), title:title,rate:rate, imgUrl:img, category:description,description:detail }))
 }

  const addTitle=(e)=>{
      setTitle(e.target.value)
     
  }
  const addImg=(e)=>{
     setImg(e.target.value)
 }
 const addRate=(e)=>{
     setRate(e.target.value)
 }
 const addDescription=(e)=>{
     setDescription(e.target.value)
 }

 const addDetail=(e)=>{
     setDetail(e.target.value)
 }

//  const addTrailer=(e)=>{
//      setTrailer(e.target.value)
//  }


  






    return (
        
        <div className="Add">
            
            <button className='add-btn' 
             onClick={addHandler}
            >
                <i className="far fa-plus-square"></i></button>
             <Modal className="Modal" isOpen={addBtn}>
                 <input type="text"
                       placeholder="Add a movie "
                       onChange={addTitle}
                       >
                </input><br/>
                <input type="text" 
                       placeholder="add Rate"
                       onChange={addRate}
                       />
               <br/>
                <input type="text"
                       placeholder="add Poster Link "
                       onChange={addImg}
                      />
                <br/>
                <input type="text"
                       placeholder="add description"
                       onChange={addDescription}
                 /><br/>
                 <input type="text"
                       placeholder="add Details"
                       onChange={addDetail}
                 /><br/>

                 
                 {/* <input type="text"
                       placeholder="add trailer link"
                       onChange={addTrailer}
                 /><br/> */}
                <button onClick={input}>save</button>  
                <button onClick={addHandler}>close</button>
            </Modal> 
        </div>
    
    
    )}

export default Add
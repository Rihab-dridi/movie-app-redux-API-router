import React,{useState} from 'react';

import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { edit_btn, edit } from '../redux/Actions/Action';
import'./Add/Add.css'
import'./MovieList/MovieList.css'
Modal.setAppElement('#root')

const Editing = ({movie,id})=>{
    const dispatch=useDispatch()
    const editBtn=useSelector(state=> state.editBtn)
// inputes local states 
const[newtitle,setnewTitle]=useState(movie.title)
const[newrate,setnewRate]=useState(movie.rate)
const[newimg,setnewImg]=useState(movie.imgUrl)
const[newdescription,setnewDescription]=useState(movie.category)
const[newdetail,setnewDetail]=useState(movie.description)
//const[trailer,setTrailer]=useState('')

// to handle the Modal
 const editHandler = ()=>{
 dispatch(edit_btn())
 }


 const editInput =()=>{
     
  dispatch (edit(movie._id,{_id:movie._id,
                            title:newtitle,
                            rate:newrate, 
                            imgUrl:newimg, 
                            category:newdescription,
                            description:newdetail }
                           ))
         setnewTitle("")
         setnewRate("")
         setnewImg("")
         setnewDetail("")
 }

  const editTitle=(e)=>{
      setnewTitle(e.target.value)
     
  }
  const editImg=(e)=>{
     setnewImg(e.target.value)
 }
 const editRate=(e)=>{
     setnewRate(e.target.value)
 }
 const editDescription=(e)=>{
     setnewDescription(e.target.value)
 }

 const editDetail=(e)=>{
     setnewDetail(e.target.value)
 }
 console.log(movie._id)


    return (
        
        <div className="Edit">
            
            <button className='edit-btn' 
             onClick={editHandler}>
             <i class="far fa-edit"></i>
            </button>
             <Modal className="Modal" isOpen={editBtn}>
                 <input 
                       type="text"
                       placeholder="edit a movie "
                       value={newtitle}
                       onChange={editTitle}
                       >
                </input><br/>
                <input type="text" 
                       placeholder="edit Rate"
                       value={newrate}
                       onChange={editRate}
                       />
               <br/>
                <input type="text"
                       placeholder="edit Poster Link "
                       value={newimg}
                       onChange={editImg}
                      />
                <br/>
                <input type="text"
                       placeholder="edit description"
                       value={newdescription}
                       onChange={editDescription}
                 /><br/>
                 <input type="text"
                       placeholder="edit Details"
                       value={newdetail}
                       onChange={editDetail}
                 /><br/>

                <button onClick={editInput,editHandler}>save</button>  
                <button onClick={editHandler}>close</button>
            </Modal> 
        </div>
    
    
    )}

export default Editing
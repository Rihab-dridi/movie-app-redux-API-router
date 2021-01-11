import {ADD,EDIT,DELET,SEARCH_NAME,SEARCH_RATE,DISPLAY} from './constantes'

export const display=(payload)=>{
    return{
        type:"DISPLAY",
        payload
    }
}
export const add_btn=()=>{
    return{
        type:"ADD_BTN"  
    }
}
export const add=(payload)=>{
    return{
        type:"ADD",
        payload
    }
}
export const delet=(payload)=>{
    return{
        type:"DELET",
        payload
    }
}
export const edit_btn=()=>{
    return{
        type:"EDIT_BTN" 
    }
}
export const edit=(ID,newInput)=>{
    return{
        type:"EDIT",
        payload:{ID,newInput}
    }
}
export const search_name=(payload)=>{
    return{
        type:"SEARCH_NAME",
        payload
    }
}
export const search_rate=(payload)=>{
    return{
        type:"SEARCH_RATE",
        payload
    }
}
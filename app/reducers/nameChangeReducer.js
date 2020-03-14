import {CHANGE_NAME} from '../action/type'

const initState={
     last_name:"herer",
    name:"bharat"
  //  name:"Hello",
   
}

const changePlace =(state=initState,action)=>{
    console.log("action"+action.name+""+action.paylaod)
   if(action.type==CHANGE_NAME){
    return{
       ...state,
        name:action.paylaod
    }
   }
 return state
}

export default changePlace;
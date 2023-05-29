import {SUBMIT_BUTTON_CLICKED,SELECT_APOIMENT} from './types';
import axios from 'axios';


export const savePosts=()=>dispatch=>{
    axios.post('get_appointment_save')
    .then(res=>{
      dispatch({
        type:SUBMIT_BUTTON_CLICKED,
        payload:res.data
      })
    })
}


export const selectPost=(post)=>{
  return{
    type:SELECT_APOIMENT,
    payload:post
  }
};
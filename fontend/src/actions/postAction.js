import {SUBMIT_BUTTON_CLICKED,SELECT_APOIMENT} from './types';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function createPostAction(postData, history) {

    axios.post('http://localhost:8000/api/get_appointment_save',postData)
    .then((response) => {
      toast.success('Success Notification !', {
        position: toast.POSITION.TOP_RIGHT
    });
        window.location.reload();
        
      });

}

export const selectPost=(post)=>{
  return{
    type:SELECT_APOIMENT,
    payload:post
  }
};
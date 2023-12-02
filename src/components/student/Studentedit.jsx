import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './student.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import baseUrl from '../../Api'

const Studentedit = (props) => {
    var [inputs,setInputs]=useState(props.data)

    const navigate = useNavigate();
    
    const inputhandler =(event)=> {
        const {name,value}=event.target
        setInputs((inputs)=>({...inputs,[name]:value}))
        console.log(inputs)
    }
    
    const savedata =()=>{
      
        if(props.method ==='put'){
          
            axios.put(baseUrl+"/student/sedit/"+inputs._id,inputs)
            .then((response)=>{
                alert("Updated")
                window.location.reload(false)
              })
              .catch(err=>console.log(err))
        }
    }
    
   
    

      return (
        <div className='aa'>
        <Typography>REGISTRATION FORM</Typography><br/>
        <TextField  label="Admission No" variant="filled" name="Admno" value={inputs.Admno} onChange={inputhandler}/><br/><br/>
        <TextField  label="NAME" variant="filled" name="Sname" value={inputs.Sname}  onChange={inputhandler}/><br/><br/>
        <TextField  label="Age" variant="filled" name="Age" value={inputs.Age}  onChange={inputhandler} /><br/><br/>
        Status: &nbsp;&nbsp;
        <select name="Status" value={inputs.Status}  onChange={inputhandler}>
         <option value="ACTIVE">ACTIVE</option>
         <option value="INACTIVE">INACTIVE</option>
        </select>
        <br/><br/>
        <Button variant="contained" onClick={savedata}>SUBMIT</Button>
      </div>
      ) 
}

export default Studentedit

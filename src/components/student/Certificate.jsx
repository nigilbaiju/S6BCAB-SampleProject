import { Button,TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import baseUrl from '../../Api'
import './certificate.css'
import { useNavigate } from 'react-router-dom';

const Certificate = () => {

    var [inputs,setInputs]=useState({"sid":'',"qualification":''})
    var [students,setStudents] = useState([]);
    var [selectedimage,setSelectedimage] = useState(null);
   
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(baseUrl+"/student/sview")
        .then(response =>{
            console.log(response.data)
            setStudents(response.data)
        })
        .catch(err=>console.log(err))
    },[])


    const inputhandler =(event)=> {
        const {name,value}=event.target
        setInputs((inputs)=>({...inputs,[name]:value}))
        console.log(inputs)
    }

    const handleimage =(event)=>{
        const file = event.target.files[0];
        setSelectedimage(file)
        inputs.certphoto=file;
    }

    const savedata =()=>{
        const formdata = new FormData();
        formdata.append('sid',inputs.sid);
        formdata.append('qualification',inputs.qualification);
        formdata.append('certphoto',selectedimage)

        fetch(baseUrl+'/certificate/certnew',
        {method:'post',body:formdata,})
        .then((response)=>response.json())
        .then((data)=>{
            alert("record saved")
        })
        .catch((err)=>{
           console.log("error")
        })
        navigate('/certificateview')
    }



  return (
    <div className='aa'>
    Student Name: 
    <select name="sid" value={inputs.sid} onChange={inputhandler}  >
        {
            students.map((value,index)=>{
                return(
                    <option key={index} value={value._id}>{value.Sname}</option>
                )


            })
        }
    </select>
    <br/><br/>
    Qualification:
    <TextField  variant="filled" name="qualification" value={inputs.qualification}  onChange={inputhandler} />
    <br/><br/><br/>
    CERTIFICATE <input type="file" onChange={handleimage}/>
    <br/><br/><br/>
    <Button variant="outlined" onClick={savedata}>SUBMIT</Button>

    </div>
  )
}

export default Certificate

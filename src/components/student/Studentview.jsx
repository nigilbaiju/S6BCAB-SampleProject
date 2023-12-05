import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Studentedit from './Studentedit';
import baseUrl from '../../Api'
import './view.css'

const Studentview = () => {
    var[students,setStudents] = useState([]);
    var[selected,setSelected] = useState();
    var[update,setUpdate] = useState(false);


    useEffect(()=>{
        axios.get(baseUrl + "/student/sview")
        .then(response =>{
            console.log(response.data)
            setStudents(response.data)
        })
        .catch(err=>console.log(err))
    },[])

const deletevalues =(id)=>{
    console.log("deleted",id)
    axios.put(baseUrl+"/student/updatestatus/"+id)
    .then((response)=>{
        alert("DELETED")
    window.location.reload(false);
    })
}

const updatevalues =(value)=>{
console.log("updated",value);
setSelected(value);
setUpdate(true);
}
var result=
<div className='bb'>
<Typography >STUDENT VIEW</Typography><br/><br/>
<TableContainer>
<Table >
  <TableHead>
    <TableRow>
      <TableCell >Admission No</TableCell>
      <TableCell >Name</TableCell>
      <TableCell >Age</TableCell>
      <TableCell >Status</TableCell>
      <TableCell>Edit</TableCell>
      <TableCell>Delete</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
      {students.map((value,index)=>{
          return(
              <TableRow key={index}>
                  <TableCell>{value.Admno}</TableCell>
                  <TableCell>{value.Sname}</TableCell>
                  <TableCell>{value.Age}</TableCell>
                  <TableCell>{value.Status}</TableCell>
                  <TableCell><ModeEditOutlineIcon color='success' onClick={()=>updatevalues(value)}/></TableCell>
                  <TableCell><DeleteForeverIcon color='error' onClick={()=>deletevalues(value._id)}/></TableCell>
              </TableRow>
          )
      })}
  </TableBody>
</Table>
</TableContainer>
</div>

if(update)
      {
        result=<Studentedit data={selected} method='put'/>
      }
  return (result)
}

export default Studentview

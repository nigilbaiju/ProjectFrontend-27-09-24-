
import React, { useEffect, useState } from 'react';
import Sidebar from '../home/Sidebar';
import { Topbar } from '../home/Topbar';
import { Button, TextField } from '@mui/material';
import './Products.css';
import axios from 'axios';
import baseurl from '../../Api';

const Products = () => {

  var [inputs,setInputs]=useState({"Pid":'',"Pname":'',"Price":'',"Cid":'',"Status":'ACTIVE'})
  var[category,setCategory] = useState([]);
  var [selectedimage,setSelectedimage] = useState(null);

  const inputhandler =(event)=> {
    const {name,value}=event.target
    setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
}

useEffect(()=>{
        
  axios.get(baseurl + "/Category/Cview")
  .then(response =>{
      console.log(response.data)
      setCategory(response.data)
  })
  .catch(err=>console.log(err))
},[])

const handleimage =(event)=>{
  const file = event.target.files[0];
  setSelectedimage(file)
  inputs.photo=file;
}

const savedata =()=>{
  const formdata = new FormData();
  formdata.append('Pid',inputs.Pid);
  formdata.append('Pname',inputs.Pname);
  formdata.append('Price',inputs.Price);
  formdata.append('Cid',inputs.Cid);
  formdata.append('Status',inputs.Status);
  formdata.append('photo',inputs.photo);

  // console.log(formdata.photo)


  fetch(baseurl+'/Product/Pnew',
  {method:'post',body:formdata,})
  .then((response)=>response.json())
  .then((data)=>{
      alert("record saved")
  })
  .catch((err)=>{
     console.log("error")
  })

}



  return (
    <div className='products-container'>
      <Topbar />
      <Sidebar />
      <div className='form-container'>
        <h1>TO ADD A NEW PRODUCT</h1>

        <div className='form-group'>
          <label htmlFor="Pid">PID:</label>
          <TextField variant="filled" name="Pid" id="Pid" value={inputs.Pid}  onChange={inputhandler} />
        </div>

        <div className='form-group'>
          <label htmlFor="Pname">Product Name:</label>
          <TextField variant="filled" name="Pname" id="Pname" value={inputs.Pname}  onChange={inputhandler} />
        </div>

        <div className='form-group'>
          <label htmlFor="Price">Price:</label>
          <TextField variant="filled" name="Price" id="Price" value={inputs.Price}  onChange={inputhandler}/>
        </div>

        <div className='form-group'>
          <label htmlFor="Cid">Category:</label>
          <select name="Cid" id="Cid" value={inputs.Cid}  onChange={inputhandler}>
          {
            category.map((value,index)=>{
                return(
                    <option key={index} value={value._id}>{value.Cname}</option>
                )


            })
        }
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor="Pphoto">Photo:</label>
          <input type="file" onChange={handleimage}/>

        </div>
        Status: &nbsp;&nbsp;
      <select name="Status" value={inputs.Status}  onChange={inputhandler}>
       <option value="ACTIVE">ACTIVE</option>
       <option value="INACTIVE">INACTIVE</option>
      </select>
      <br/><br/>

        <Button variant="outlined" className='save-button' onClick={savedata}>Save</Button>
      </div>
    </div>
  );
}

export default Products;

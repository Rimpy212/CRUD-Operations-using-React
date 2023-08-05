import React from 'react'
import { useState } from 'react';

    
const DeleteBlog = () => {
    const[bn,setbn]=useState(true);
    const[id,setId]=useState('');
    const[mssge,setmssge]=useState('');
    const Cr=()=>{  
        fetch(`http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${id}`,{
            method:"DELETE",
            headers: {
                "Content-Type" : "application/json; charset=utf8",
                "Access-Control-Allow-Origin" : "*",
                Authorization: "Basic "+ btoa("test@liferay.com:learn")
            }
        })
        .then(res=>res.json())
        .then(data=>console.log(data));
    }

    const onsubmits=(e)=>{
        e.preventDefault();
        Cr();
        setmssge("Deleted Successfully");
        setTimeout(()=>{
            setbn(false);
        },2000);
    }
    const idChange=(e)=>{
        e.preventDefault();
        setId(e.target.value);
    }
    // const changeEvent=(e)=>{
    //     e.preventDefault();
    //     setbn(false);
    // }
  return (
    <>  
    {
        bn ? (<div className='card card-body center'>
            <div style={{
                      width: "30em",
                      backgroundColor: "#ADD8E6",
                      padding: 2,
                      borderRadius: 10,
                      marginBlock: 10,
                    }}>{mssge}</div>
        <form onSubmit={onsubmits} className='form-group'>
        <label htmlFor="id">Enter Id</label>
            <input placeholder="Enter Id" className='form-control' type="number"  value={id} onChange={idChange} name='id'/>
            <br/>
            <button type='submit'>Delete</button>
        </form>           
        </div>) : null
    }
        
    </>
            
  )
}

export default DeleteBlog

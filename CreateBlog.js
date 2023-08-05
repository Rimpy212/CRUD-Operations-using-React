import React,{useEffect, useState} from 'react'
import ClayButton from '@clayui/button';
import ClayForm, {ClayInput} from '@clayui/form';

const CreateBlog = () => {
    const[mssge,setmssge]=useState('');
    const[userData,setUserData]=useState({
        headline: "",
        articleBody: "",
    });
    const[bn,setbn]=useState(true);
    const Cr=()=>{
        console.log("create click");
        let a=
          {
            "headline": userData.headline,
            "articleBody": userData.articleBody
        }
        const info=JSON.stringify(a);
    
        fetch("http://localhost:8080/o/headless-delivery/v1.0/sites/20119/blog-postings",{
            method:"POST",
            body:info,
            headers: {
                "Content-Type" : "application/json; charset=utf8",
                "Access-Control-Allow-Origin" : "*",
                Authorization: "Basic "+ btoa("test@liferay.com:learn")
            }
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err)); 
    }
    // useEffect(()=>{
    //     Cr();
    // },[])
    const handleInputChange=(e)=>{
        setUserData({...userData,[e.target.name]:e.target.value})
    };

    const onsubmits=(e)=>{
        e.preventDefault();
        Cr();
        setmssge("Created Successfully");
        setTimeout(()=>{
            setbn(false);
        },2000);
    }


  return (
    <>
            {
            bn ?(<div className='card card-body center'>
                <div style={{
                      width: "30em",
                      backgroundColor: "#ADD8E6",
                      padding: 2,
                      borderRadius: 10,
                      marginBlock: 10,
                    }}>{mssge}</div>
                <form onSubmit={onsubmits} className='form-group'>
                    <label htmlFor="headline">Enter Heading</label>
                    <input placeholder="Enter Headline" className='form-control' type="text" value={userData.headline} onChange={handleInputChange} name='headline'/>
                    <label htmlFor="articleBody">Enter ArticleBody</label>
                    <input placeholder="Enter ArticleBody" className='form-control' type="text" value={userData.articleBody} onChange={handleInputChange} name='articleBody'/>
                    <button type='submit'>Post</button>
                </form>           
            </div>): null
            }
    </>
  )
}

export default CreateBlog

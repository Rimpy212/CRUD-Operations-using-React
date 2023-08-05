import React,{ChangeEvent, useState} from 'react'

const CreateDoc = () => {
    const[data,setData]=useState('');
    const[file,setFile]=useState('');
    const[bn,setbn]=useState(true);
    const[mssge,setmssge]=useState('');
    const Cr=async()=>
    {
        console.log("create click");

            // e.preventDefault();
            const formData=new FormData();
            formData.append('file',file);
            
            const res=await fetch('http://localhost:8080/o/headless-delivery/v1.0/sites/20119/documents',{
                method:'POST',
                body:formData,
                headers: {
                    Authorization: "Basic "+ btoa("test@liferay.com:learn")
                }
            });
            const dt=await res.json();
            setData(dt);
            console.log(dt);
        }

        const handleInputChange=(e)=>{
            e.preventDefault();
            setFile(e.target.files[0]);
        }


    const onsubmits=(e)=>{
        
        Cr();
        setmssge("Posted Successfully");
        setTimeout(()=>{
            setbn(false);
        },2000);
        // setbn(true);
        e.preventDefault();
        // setTimeout(()=>{
        //     setbn(true);
        // },3000);
        // console.log(data);
    }


  return (
    <>
            {bn? <div className='card card-body center'>
            <div style={{
                      width: "30em",
                      backgroundColor: "#ADD8E6",
                      padding: 2,
                      borderRadius: 10,
                      marginBlock: 10,
                    }}>{mssge}</div>
                <form onSubmit={onsubmits} className='form-group'>
                    <label htmlFor="headline">Enter File</label>
                    <input placeholder="Choose File" className='form-control' type="file" onChange={handleInputChange} name='headline'/>
                    <br/>
                    <button type='submit'>Post</button>
                </form>           
                    <div>Title of the selected file is: {data.title}</div>
            </div> : null}
            
            
    </>
  )
}

export default CreateDoc

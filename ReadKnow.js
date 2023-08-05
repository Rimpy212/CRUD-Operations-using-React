import React,{useState,useEffect} from 'react'

const ReadKnow = () => {
    const [data,setData]=useState('');
    const cr=async()=>{
      const res= await fetch("http://localhost:8080/o/headless-delivery/v1.0/sites/20119/knowledge-base-articles",{
        method:'GET',
      headers: {
          "Content-Type" : "application/json; charset=utf8",
          "Access-Control-Allow-Origin" : "*",
          Authorization: "Basic "+ btoa("test@liferay.com:learn")
      }
      })
      const dt=await res.json();
    //   console.log(dt);
      setData(dt)
    //   console.log(data);
  
      }
  
  
      useEffect(()=>{
          cr();
      },[])
      
    return (
      <>
        <div>
        <center>
                  <h1 style={{ color: "#0047AB" }}>Read Blogs Executed</h1>
                  {
                    data && 
                    (data.items.map((dataObj,index) => {
                      return <div key={dataObj.id} style={{
                        width: "30em",
                        backgroundColor: "#ADD8E6",
                        padding: 2,
                        borderRadius: 10,
                        marginBlock: 10,
                      }}>            
                          <p >Id is:{dataObj.id}</p>
                          <p>Title is: {dataObj.title}</p>
                          <p >ArticleBody is :{dataObj.articleBody}</p>
                      
                      </div>
                      
                    })
                    )
                    
                    }
        </center>
          
       
      </div>
      </>
    )
}

export default ReadKnow

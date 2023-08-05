import React, { useState } from "react";
import ClayButton from '@clayui/button';
// import ClayLink from '@clayui/link';
import CreateDoc from "./CreateDoc";
import ReadDoc from "./ReadDoc";



const Documents = () => {

    //const[st,setst]=useState(false);
    const[cr,setcr]=useState(false);
    //for getting
    // const getClick=()=>{
    //     setst(true);
    //     setcr(false);
    // }
    //for posting
    const createClick=()=>{
        setcr(true);
        // setst(false);
    }
  return (
    <> 
            <ClayButton displayType={null} onClick={createClick}>
               Create
            </ClayButton>
            {/* <ClayButton displayType={null} onClick={getClick}>
              Read
            </ClayButton> */}
            <br/>
            {cr && <div className="card card-body mt-5"><CreateDoc/></div>}
            {/* {st? <div className="card card-body mt-5"><ReadDoc/></div> :null} */}
    </>
           
  )
}

export default Documents

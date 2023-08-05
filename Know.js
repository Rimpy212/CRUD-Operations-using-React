import React, {useState} from "react";
import ClayButton from '@clayui/button'
import CreateKnow from "./CreateKnow";
import ReadKnow from "./ReadKnow";
import UpdateKnow from "./UpdateKnow";
import DeleteKnow from "./DeleteKnow";

const Know = () => {
	const[st,setst]=useState(false);
    const[cr,setcr]=useState(false);
    const[up,setup]=useState(false);
    const[del,setdel]=useState(false);
    const getClick=()=>{
        setst(true);
        setcr(false);
        setup(false);
        setdel(false);
    }
    const createClick=()=>{
        setcr(true);
        setst(false);
        setup(false);
        setdel(false);
    }
    const updateClick=()=>{
        setup(true);
        setst(false);
        setcr(false);   
        setdel(false);
    }
    const deleteClick=()=>{
        setdel(true);
        setst(false);
        setcr(false);
        setup(false);     
    }
    
    
    
 
  return (
    <> 
            <ClayButton displayType={null} onClick={createClick}>
               Create
			</ClayButton>
			<ClayButton displayType={null} onClick={getClick}>
				Read
			</ClayButton>
			<ClayButton displayType={null} onClick={updateClick}>
				Update
			</ClayButton>
			<ClayButton displayType={null} onClick={deleteClick}>
				Delete
			</ClayButton>
            <br/>
            {cr? <div className="card card-body mt-5"><CreateKnow/></div> :null}
            {st? <div className="card card-body mt-5"><ReadKnow/></div> :null}
            {up? <div className="card card-body mt-5"><UpdateKnow/></div> :null}
            {del? <div className="card card-body mt-5"><DeleteKnow/></div> :null}
    </>
           
  )
}

export default Know

import React,{useState,useContext,useEffect} from 'react'
import { useParams } from 'react-router';
import { Context } from './Layout'
function Details() {

    const{CandidateList,HandleButtons}=useContext(Context);
    const [candidateList]=CandidateList;
    const [candidate,setCandidate]=useState({})
    const {id}= useParams();
    const [handleReject,handleSelect]=HandleButtons;

    console.log(id);
    useEffect(()=>{
        setCandidate(candidateList.find(c=>c.id===id));
    },[id,candidateList])

    return (
        <div className="details">
            <div>
                <img src={candidate?.Image} alt={candidate?.name} />
            </div>
           
            <div className="details-container">
                <center>
                    <div>
                <p style={{fontSize:'4rem'}}>{candidate?.name}</p>  
                </div>
                </center>   
                 <div className="button-section">
                    <button className="accept"onClick={()=>{handleSelect(candidate)}}>Accept</button>
                    <button className="reject" onClick={()=>{handleReject(candidate)}} >Reject</button>
                </div>     
            </div>
         
        </div>
    )
}

export default Details

import React ,{useContext}from 'react'
import { Context } from './Layout';
import Card from './Card';
function Rejected() {
    const {RejectedList}=useContext(Context);
    const [rejectedList]= RejectedList;

    return (
        <>
        <center>
        <h1>Rejected Candidates</h1>
        </center>
       
        <div className="home-container">
           {
            rejectedList.map((c)=>(
                    <Card item={c} key={c.id}/>
                ))
            }
            </div>
        </>
    )
}

export default Rejected

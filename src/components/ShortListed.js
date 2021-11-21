import React,{useContext} from 'react'
import Card from './Card';
import { Context } from './Layout';

function ShortListed() {

    const {SelectedList}=useContext(Context);
    const [selectedList]= SelectedList;

    return (
        <>
        <center>
        <h1>Short Listed Candidates</h1>
        </center>
        
        <div className="home-container">
           {
            selectedList.map((c)=>(
                    <Card item={c} key={c.id}/>
                ))
            }
            </div>
        </>
    )
}

export default ShortListed

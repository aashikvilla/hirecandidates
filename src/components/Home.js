import React ,{useContext, useState,useEffect}from 'react'
import Card from './Card';
import { Context } from './Layout';


function Home() {

    const {CandidateList}=useContext(Context);
    const [candidateList]= CandidateList;   
    const [displayCandidateList,setDisplayCandidateList]=useState(candidateList);
   
    useEffect(() => {      
         setDisplayCandidateList(candidateList);     
    }, [candidateList])

    const handleSearch=(value)=>{
        console.log(value);
        let newList=candidateList.filter((a)=>(a.name.toLowerCase().includes(value.toLowerCase())));
        console.log("filter",newList);
        setDisplayCandidateList(newList);
    }

    return (
       <>      
          <div className="search-container">
              <center>
                <input type="text" placeholder="Search" onChange={(e)=>{handleSearch(e.target.value)}}/>               
              </center>
          </div>
          <div className="home-container">
            {
                displayCandidateList.map((c)=>(
                        <Card item={c} key={c.id}/>
                    ))
            }
            </div>            
       </>
    )
}

export default Home

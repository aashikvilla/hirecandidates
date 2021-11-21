import React,{useState, useEffect,} from 'react'
import Routing from '../Routing';
import NavBar from './NavBar'


export const Context = React.createContext();

function Layout() {
    const [candidateList, setCandidateList] = useState([]);
    const [selectedList, setSelectedList] = useState([]);
    const [rejectedList, setRejectedList] = useState([]);

    useEffect(() => {
       fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json')
      .then(response => response.json())
      .then(data => {
       console.log("data",data);
       setCandidateList(data);
      })
      .catch(error => {
       console.log("error",error)
      })
    }, [])

   

    const handleSelect=(candidate)=>{
        console.log("seletc",candidate);
        let existInSelected=selectedList.find(c=>c.id===candidate.id);
        if(!existInSelected){
            setSelectedList([...selectedList,candidate]);
        }
        let existInRejected=rejectedList.find(c=>c.id===candidate.id);
        if(existInRejected){
            let newList=rejectedList.filter((c)=>c.id!==candidate.id)
            setRejectedList(newList);
        }
        console.log("sss",existInSelected,existInRejected)
        window.alert(`${candidate.name} has been selected!`)
    }

    const handleReject=(candidate)=>{
        
        let existInRejected=rejectedList.find(c=>c.id===candidate.id);
        if(!existInRejected){
            setRejectedList([...rejectedList,candidate]);
        }

        let existInSelected=selectedList.find(c=>c.id===candidate.id);
        if(existInSelected){
            let newList=selectedList.filter((c)=>c.id!==candidate.id)
            setSelectedList(newList);
        }
        window.alert(`${candidate.name} has been rejected!`)
    }

    const context={
        CandidateList:[candidateList, setCandidateList],
        SelectedList:[selectedList, setSelectedList],
        RejectedList:[rejectedList, setRejectedList],
        HandleButtons:[handleReject,handleSelect]
    }


    return (
       <>
    
        <Context.Provider value={context}>
            <NavBar />   
            <section className="main-section">
            <Routing/>  
            </section>    

            <footer style={{padding:'1rem'}}>
                <center>
                Created by Aashik Villa
                </center>
            </footer> 
            
        </Context.Provider>
       </>
    )
}

export default Layout

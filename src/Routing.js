import React from 'react'
import Home from './components/Home'
import { Route, Routes} from 'react-router-dom';
import ShortListed from './components/ShortListed';
import Rejected from './components/Rejected';
import Details from './components/Details';

function Routing() {
    return (
        <>
            <Routes>                
                <Route path="/" element={<Home/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path='/candidate/:id' element={<Details />} />
                <Route path="/shortlisted" element={<ShortListed/>}/>
                <Route path="/rejected" element={<Rejected/>}/>
            </Routes>        
        </>
    )
}

export default Routing

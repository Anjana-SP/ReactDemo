import React from 'react';
import { Link } from 'react-router-dom';
import FetchAllTrainerTwo from './FetchAllTrainerTwo';

function Home() {

    return(
        <div>
        <h2>Welcome to MyPage</h2>
        
       
        {/* <Link to="/trainer/all">Display all Trainers</Link><br></br> */}
        <FetchAllTrainerTwo/>
        <Link to="/trainer/save">ADD Trainer</Link><br></br>
        {/* <Link to="/trainer">Trainer By Id</Link> */}
        {/* <Link to= "/">Back to Home</Link> */}
       
        </div>
    )
        
}
export default Home;
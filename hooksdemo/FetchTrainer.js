import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';

function FetchTrainer() {

    const[trainer,setTrainer]=useState(null);
    const{id}= useParams();

    const fetchTrainerById=() => {
        Axios.get("http://localhost:8082/trainer/"+id).then(resp=>setTrainer(resp.data));
    }
    useEffect(fetchTrainerById,[]);
    return(
        <div>
            <h2>Trainer Details</h2>
            {
            trainer != null &&
                <div>
                    <p>TrainerId:{trainer.trainerId}</p>
                    <p>TrainerName:{trainer.trainerName}</p>
                    <p>TrainerEmail:{trainer.trainerEmail}</p>
                    <p>Mobile:{trainer.trainerMobile}</p>
                    <p>Experience:{trainer.trainerExperience} </p>
                    <p>Skills:{trainer.trainerSkillset}</p>
                </div>
            }
        </div>
    )
}
export default FetchTrainer;
import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function DeleteTrainer() {

    const[trainer,setTrainer]=useState(null);
    const{id}= useParams();

    const fetchTrainerById=() => {
        Axios.get("http://localhost:8082/trainer/"+id).then(resp=>setTrainer(resp.data));
    }
    useEffect(fetchTrainerById,[]);

    const deleteTrainer = () => {
        Axios.delete("http://localhost:8082/trainer/delete/"+id).then(resp=>alert("Trainer Deleted"));
    }

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
            <button onClick={deleteTrainer}>Delete</button>
        </div>
    )
}
export default DeleteTrainer;
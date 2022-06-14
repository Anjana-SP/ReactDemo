import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function FetchAllTrainerTwo() {
    const [trainer, setTrainer] = useState([]);

    const fetchAllTrainers = () => {
        Axios.get("http://localhost:8082/trainer/all").then(resp => setTrainer(resp.data));
    }
    useEffect(fetchAllTrainers, []);
    return (
        <div>
            <h3>All Trainers(using Hooks)</h3>
            {
                trainer.length > 0 ?
                    <table border="1">
                        <tr>
                            <th>TrainerId</th>
                            <th>Name</th>
                            <th>Email</th>
                            {/* <th>Mobile</th>
                            <th>Experience</th>
                            <th>SkillSet</th> */}
                            <th>View</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        {
                            trainer.map((t, index) =>
                                <tr key={index} >

                                    <td> {t.trainerId} </td>
                                    <td> {t.trainerName}</td>
                                    <td> {t.trainerEmail}</td>
                                    {/* <td> {t.trainerMobile}</td>
                                    <td> {t.trainerExperience}</td>
                                    <td> {t.trainerSkillset}</td> */}
                                    <td> <Link to={`/trainer/get/${t.trainerId}`}>View</Link></td>
                                    <td> <Link to="">Edit</Link></td>
                                    <td> <Link to={`/trainer/delete/${t.trainerId}`}>Delete</Link></td>
                                </tr>
                            )
                        }
                    </table>
                    : <h3> trainers Not Available</h3>
            }
            {/* <div>
                <Link to="/">Back To Home</Link>
            </div> */}
        </div>
    )
}
export default FetchAllTrainerTwo;
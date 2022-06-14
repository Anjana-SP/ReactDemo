import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function CreateTrainer() {

    const [tId, setTId] = useState("");
    const [tName, setTName] = useState("");
    const [tMobile, setTMobile] = useState("");
    const [tMail, setTMail] = useState("");
    const [tExperience, setTExperience] = useState("");
    const [tSkill, setSkill] = useState("");

    const handleSubmit = () => {
        const payload = {
            trainerId: tId,
            trainerName: tName,
            trainerEmail: tMail,
            trainerMobile: tMobile,
            trainerExperience: tExperience,
            trainerSkillset: tSkill
        }
        Axios.post("http://localhost:8082/trainer/save", payload).then(resp =>
            alert("Product saved with Id:" + resp.data.trainerId));
    }
    return (
        <div className="container">
            <h2 style={{backgroundColor: "lightblue"}}>Trainer Form</h2>
            <div className="form-group">
                <label htmlFor='tName'>TrainerName:</label>
                <input type="text" className="form-control" name="tName" value={tName} onChange={e => setTName(e.target.value)} />

            </div>
            <div className="form-group">
                <label htmlfor='tMail'>TrainerEmail</label>
                <input type="text" className="form-control" name="tMail" value={tMail} onChange={e => setTMail(e.target.value)} />

            </div>
            <div className="form-group">
                <label htmlFor='tMobile'>TrainerMobile: </label>
                <input type="text" className="form-control" name="tMobile" value={tMobile} onChange={e => setTMobile(e.target.value)} />

            </div>
            <div className="form-group">
                <label htmlFor='tExperience'>Experience:</label>
                <input type="text" className="form-control" name="tExperience" value={tExperience} onChange={e => setTExperience(e.target.value)} />

            </div>
            <div className="form-group">
                <label htmlFor='tSkill'>Skills:</label>
                <input type="text" className="form-control" name="tSkill" value={tSkill} onChange={e => setSkill(e.target.value)} />

            </div>
            <div>
                <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </div>
            <div style={{float:"right"}}>
                <Link to="/"><button type="button" class="btn btn-secondary">Back To Home</button></Link>
            </div>
        </div>
    )
}
export default CreateTrainer;
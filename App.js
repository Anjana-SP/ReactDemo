import logo from './logo.svg';
import './App.css';
import CounterOne from './hooksdemo/CounterOne';
import CounterTwo from './hooksdemo/CounterTwo';
import Home from './hooksdemo/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route
}from 'react-router-dom';
import FetchAllTrainerTwo from './hooksdemo/FetchAllTrainerTwo';
import CreateTrainer from './hooksdemo/CreateTrainer';
import FetchTrainer from './hooksdemo/FetchTrainer';
import DeleteTrainer from './hooksdemo/DeleteTrainer';


function App() {
  return (
    <div className="App">
     
     
    
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/counterone" element={<CounterOne/>}  />
          <Route path="/countertwo" element={<CounterTwo/>} />
          <Route path="/trainer/all" element={<FetchAllTrainerTwo/>} />
          <Route path="/trainer/save" element={<CreateTrainer/>} />
          <Route path="/trainer/get/:id" element={<FetchTrainer/>} />
          <Route path="/trainer/delete/:id" element={<DeleteTrainer/>} />
         
          
        </Routes>
      </Router>
      {/* <FetchAllTrainerTwo/> */}
    
    </div>
  );
}

export default App;

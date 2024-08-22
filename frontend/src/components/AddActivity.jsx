import React from 'react'
import {useState,useContext , useEffect} from 'react';
import API from '../utils/api.js';
import './addActivityStyle.css'
import {AuthContext} from '../context/AuthContext';

const emissionFactors = {
    "carTravel": 0.18,           // kg CO₂e per km (petrol car)
    "electricity": 0.82,         // kg CO₂e per kWh
    "lpgUsage": 2.98,            // kg CO₂e per kg of LPG
    "airTravel": 0.15,           // kg CO₂e per km (domestic flights)
    "riceConsumption": 2.7,      // kg CO₂e per kg of rice
    "busTravel": 0.08,           // kg CO₂e per km
    "trainTravel": 0.03,         // kg CO₂e per km
    "twoWheelerTravel": 0.045,   // kg CO₂e per km
    "milkConsumption": 1.4,      // kg CO₂e per liter of milk
    "waste": 0.25                // kg CO₂e per kg of waste
};


const AddActivity = () => {
  const {setAuthenticated} = useContext(AuthContext)
  const [type,setType] = useState('');
  const [carbonEmission,setQuantity] = useState(0);
  
  const typeChange = (event) =>{
    setType(event.target.value);
  }
  const quantityChange = (event) =>{
    setQuantity(event.target.value);
  }
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() =>{
    setAuthenticated(true);
  })

  const handleSubmission = (event) =>{

    event.preventDefault();
    try{
        const response = API.post('/activity/addActivity',{type,carbonEmission},
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        console.log(response.data);
        setType('');
        setQuantity(0);
    }
    catch(error){
        console.error(error);
        alert('Failed to add activity');
    }
  }
  return (
    <div>
        <h2>Add Activity</h2>
        <form onSubmit={handleSubmission}>
            <label>Type:</label>
            <select value={type} onChange={typeChange} required>
                <option value="" disabled>
                    Choose an option
                </option>
                <option value="carTravel">Private Car Travel per km</option>
                <option value="twoWheelerTravel">Private Two wheeler Travel per km</option>
                <option value="electricity">Electricity Consumption per kWh</option>
                <option value="lpgUsage">LPG Gas Usage per kg</option>
                <option value="riceConsumption">Rice Consumption per kg</option>
             </select>
            <label>Quantity in Kg:</label>
            <input type="number" placeholder='quantity' value={carbonEmission} onChange={quantityChange} required />
            <button type="submit" className='formButton'>Add</button>
        </form>
    </div>
  )
}

export default AddActivity;
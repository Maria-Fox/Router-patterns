import React, { useEffect, useState } from "react";
import { useParams, Route, Routes, useNavigate, Navigate} from "react-router-dom";
import DogList from "./DogList";

const DogDetail = ({dogs}) => {
  let {name} = useParams();
  let navigate = useNavigate();

  // returns the array item that matches. If no matches returns undefined.
  let currentDog = dogs.find(dog => dog.name === name);
  // console.log(currentDog);

  if(!currentDog){
      return(
        <Navigate to ="/dogs"/>
      )
  }

  return(
    <div>
      <h1>{currentDog.name}</h1>
      <img src = {currentDog.src} alt = {currentDog.name}/>

      <p>{currentDog.name} is {currentDog.age} years old.</p>  

      <p>Some fun facts about {currentDog.name } include :</p>

      <ul>
      {currentDog.facts.map(f => <li>{f} key ={f}</li>)}
      </ul> 


    </div>
  )
}

export default DogDetail;
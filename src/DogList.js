import React from "react";
import { NavLink } from "react-router-dom";

const DogList = ({dogs}) => {
  return(
    <div>
      <h1>Dog Finder</h1>
      {dogs.map(d => (
        <div key ={d.name}>
          <NavLink className = "DogList-Link" to = {`/dogs/${d.name}`}>See {d.name}</NavLink>
          <img src = {d.src} alt = {d.name} className = "DogList-Pic"/>
      </div>
      ))}
    </div>
  )
}

export default DogList;
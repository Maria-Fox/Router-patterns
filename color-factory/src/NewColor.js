import React, {useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";

const NewColor = ({colors, updateColors}) => {

  let initialState = "";
  let navigate = useNavigate();

  let [formData, setFormData] = useState(initialState);

  let handleChange = (e) =>{
    let {name, value} = e.target;
    setFormData(value);
    console.log(formData);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    updateColors(formData);
    navigate("/colors");
  };


  return(
    <form onSubmit = {handleSubmit}>
      <label htmlFor = "newColor" onSubmit = {handleSubmit}> Choose a color
      <br/>
      <input 
        type = "input"   
        id = "newColor"
        value = {formData}
        onChange = {handleChange}
      >
      </input>
      <br/>

      <button>Add</button>

      </label>
    </form>
  )

}

export default NewColor;
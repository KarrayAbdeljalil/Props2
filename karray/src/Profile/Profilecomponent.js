import React from "react";
const Stobject = {color : "blue" }
const dimension = { height : "250px" }
const ProfileComponent = ({Fullname , Bio, Profession, children, handleAlert}) => {
  return (
    <div>
      <h1 style={Stobject} >{Fullname }  </h1>
      <img src={children} style = { dimension } alt="PIC"/>
      <h1>{Bio  } </h1>
      <h1>{Profession  } </h1> 
      <button onClick= {()=> handleAlert(Fullname)}>Welcome</button>
      
    </div>
  );
};
export default ProfileComponent;




import React from "react";

function Profile(props) {
   console.log(props)
    return(
        <div>
      
        <h1>{props.data.FullName}</h1>
        <h1>{props.data.Bio}</h1>
        <h1>{props.data.pro}</h1>
        <button onClick={() => props.handleName(props.data.FullName)}>Show Name</button>
         {props.children}
        </div>
    );
}
export default Profile;
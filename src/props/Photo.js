import React from "react";
function Photo( { props } ) {
return  <div style={{backgroundColor: "black" }}> 
{props.nom}
{props.children} 
</div> ;
}

export default Photo;
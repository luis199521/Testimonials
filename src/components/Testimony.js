import React from "react";
import '../stylesheets/Testimony.css';
function Testimony(props) {
  return (
    <div className="testimony-container">
      <img className="testimony-image"
        src={require(`../images/${props.image}-Testimony.png`)}
        alt={`Foto de ${props.alt}`}/>
      <div className="testimony-text-container">
        <p className="testimony-name">
          <strong>{props.name}</strong> in {props.country}
        </p>
        <p className="testimony-position">
          {props.position} at <strong>{props.company}</strong>
        </p>
        <p className="testimony-text">
          "{props.testimony}"
        </p>
      </div>
    </div>

  );

}

export default Testimony;

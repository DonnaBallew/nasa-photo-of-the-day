import React from "react";

const NasaCard = (props) => {
  //if (!props.photo) return <h3>Loading...<h3>;

  return (
    <div className="nasa-card">
      <h1> {props.title}</h1>
      <img src={props.photo} alt="random photos from NASA" />
      <p>Photo shot by: {props.copywright}</p>
      <p>Date: {props.date}</p>
      <div className="description">
        <p>PHOTO DESCRIPTION: {props.explanation}</p>
      </div>
    </div>
  );
};

export { NasaCard };

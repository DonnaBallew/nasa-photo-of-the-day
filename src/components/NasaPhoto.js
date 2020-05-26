import React, { useState, useEffect } from "react";
import { NasaCard } from "./NasaCard";
import axios from "axios";

export default function NasaPhoto(props) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=Cq2LeY2J2jVpRURbwuqcMMbyJQbCKyCxynPr6pPo"
      )
      .then((res) => {
        console.log(res);
        setInfo(res.data);
      })
      .catch((error) => {
        console.log("Data is lost in a black hole!", error);
      });
  }, []);

  return (
    <div className="info">
      <NasaCard
        title={info.title}
        photo={info.url}
        copyright={info.copyright}
        date={info.date}
        explanation={info.explanation}
      />
    </div>
  );
}

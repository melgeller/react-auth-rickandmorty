import React, { useContext } from "react";
import { RMContext } from "../context/context";
import './Planets.scss'

const Planets = () => {
  const { planets } = useContext(RMContext);
  return (
    <div className='planets'>
      {planets.map((planet) => (
        <div className='card'>
          <h3 key={planet.id}>{planet.name}</h3>
          <img src="https://c.tenor.com/PjI-fL_eodcAAAAd/rick-and-morty-rick.gif" alt="planeta"></img>
          <p>{planet.type}</p>
          <p>{planet.dimension}</p>
        </div>
      ))}
    </div>
  );
};

export default Planets;

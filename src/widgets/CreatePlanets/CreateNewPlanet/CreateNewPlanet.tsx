import './CreateNewPlanet.scss';
import React, { useState } from "react";

const CreateNewPlanet = ({ onPlanetCreated }: { onPlanetCreated: (planetData: any) => void }) => {
  const [planetName, setPlanetName] = useState("");
  const [planetColor, setPlanetColor] = useState("#00bfff");
  const [planetSize, setPlanetSize] = useState(100);
  const [atmosphere, setAtmosphere] = useState("Oxygen");

  const handlePlanetCreation = () => {
    const planetData = {
      name: planetName,
      color: planetColor,
      size: planetSize,
      atmosphere: atmosphere,
    };

    onPlanetCreated(planetData);

    setPlanetName("");
    setPlanetColor("#00bfff");
    setPlanetSize(300);
    setAtmosphere("Oxygen");
  };

  return (
    <section className="CreateNewPlanet">
      <h2>Create a new planet!</h2>

      <label>Name:</label>
      <input
        type="text"
        value={planetName}
        onChange={(e) => setPlanetName(e.target.value)}
        placeholder="Enter planet name"
      />

      <label>Color:</label>
      <input
        type="color"
        value={planetColor}
        onChange={(e) => setPlanetColor(e.target.value)}
      />

      <label>Size (km):</label>
      <input
        type="range"
        min="500"
        max="3000"
        value={planetSize}
        onChange={(e) => setPlanetSize(Number(e.target.value))}
      />
      <span>{planetSize}</span>

      <label>Atmosphere:</label>
      <select value={atmosphere} onChange={(e) => setAtmosphere(e.target.value)}>
        <option value="Oxygen">Oxygen</option>
        <option value="Methane">Methane</option>
        <option value="Nitrogen">Nitrogen</option>
      </select>

      <button className="CreatePlanetButton" onClick={handlePlanetCreation}>Create Planet</button>
    </section>
  );
};

export default CreateNewPlanet;

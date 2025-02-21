import './CreatePlanets.scss';

// const CreatePlanets = () => {
//     return (
//         <section className="CreatePlanets">
//             <h2>Create Your Own Planet</h2>
//             <button>+</button>
//         </section>
//     )
// }

// export default CreatePlanets;

import React, { useState } from "react";
import CreateNewPlanet from "./CreateNewPlanet/CreateNewPlanet";

const CreatePlanets = () => {
    const [showCreateForm, setShowCreateForm] = useState(false);
    // const [planetObjects, setPlanetObjects] = useState([]);

    const handleCreatePlanetClick = () => {
        setShowCreateForm(!showCreateForm);
    };

    return (
        <section className="CreatePlanets">
            <h2>Create your own planet</h2>

            <button className="AddNewPlanetButton" onClick={handleCreatePlanetClick}>+</button>

            {showCreateForm && <CreateNewPlanet onPlanetCreated={(planetData) => console.log(planetData)} />}
        </section>
    );
};

export default CreatePlanets;

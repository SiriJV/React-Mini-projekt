import { useState } from 'react';
import PlanetList from './PlanetList/PlanetList';
import './SpaceAccordion.scss';

// const SpaceAccordion = () => {
//     // const [isActive, setIsActive] = useState(false);

//     return (
//         <section className="SpaceAccordion">
//             <h1>Planets</h1>
//             <PlanetList />
//         </section>
//     )
// }

// export default SpaceAccordion;

// export default function Accordion() {
//     const [activeStates, setActiveStates] = useState({});
  
//     return (
//       <>
//         <h2>Planets</h2>
//         {planets.map((planet) => (
//           <PlanetList 
//             key={planet.name}
//             planet={planet} 
//             isActive={activeStates[planet.name] || false} 
//             setIsActive={(state) => setActiveStates({ ...activeStates, [planet.name]: state })}
//           />
//         ))}
//       </>
//     );
//   }

const SpaceAccordion = () => {
    const [activeStates, setActiveStates] = useState<{ [key: string]: boolean }>({});

    return (
        <>
            <h2>Planets</h2>
            {planets.map((planet) => (
                <PlanetList 
                    key={planet.name}
                    planet={planet} 
                    isActive={activeStates[planet.name] || false} 
                    setIsActive={(state) => setActiveStates({ ...activeStates, [planet.name]: state })}
                />
            ))}
        </>
    );
}

export default SpaceAccordion;

export type Planet = {
    name: string;
    description: string
}

export const planets: Planet[] = [
    {
        name: "Jupiter",
        description: "Jupiter is the fifth planet from the Sun, and the largest planet in our solar system."
    },
    {
        name: "Mercury",
        description: "Mercury is the planet nearest to the Sun, and the smallest planet in our solar system."
    },
    {
        name: "Venus",
        description: "Venus is the second planet from the Sun, and the sixth largest planet."
    },
    {
        name: "Mars",
        description: "Mars is the fourth planet from the Sun, and the seventh largest planet."
    },
    {
        name: "Neptune",
        description: "Neptune is the eighth and most distant planet in our solar system. It's the fourth largest planet."
    }
];
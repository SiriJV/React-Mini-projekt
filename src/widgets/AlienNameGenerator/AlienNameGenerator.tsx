import React, { useState } from "react";
import './AlienNameGenerator.scss';

// const AlienNameGenerator = () => {
//     const [alienName, setAlienName] = useState("");

//     const GenerateAlienNames = () => {
//       const prefixes = ["Zor", "Xen", "Gor", "Vil", "Zar", "Nek", "T'rak", "Qik"];
//       const middles = ["kha", "ron", "ith", "or", "lus", "ak", "or", "oza"];
//       const suffixes = ["on", "ar", "ax", "is", "th", "ok", "na", "ix"];
    
//       const randomizeName = () => {
//         const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
//         const randomMiddle = middles[Math.floor(Math.random() * middles.length)];
//         const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    
//         return randomPrefix + randomMiddle + randomSuffix;
//     }}
//     return (
//         <section className="AlienNameGenerator">
//             <h2>Alien Name Generator</h2>
//             <button onClick={() => setAlienName(randomizeName())}>Generate name</button>
//             <p>{alienName}</p>
//         </section>
//     )
// }

// import React, { useState } from "react";
// import './AlienNameGenerator.scss';

const AlienNameGenerator = () => {
    const [alienName, setAlienName] = useState("");

    const randomizeName = () => {
      const prefixes = ["Zor", "Xen", "Gor", "Vil", "Zar", "Nek", "T'rak", "Qik"];
      const middles = ["kha", "ron", "ith", "or", "lus", "ak", "or", "oza"];
      const suffixes = ["on", "ar", "ax", "is", "th", "ok", "na", "ix"];

      const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
      const randomMiddle = middles[Math.floor(Math.random() * middles.length)];
      const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];

      return randomPrefix + randomMiddle + randomSuffix;
    };

    return (
        <section className="AlienNameGenerator">
            <h2>Alien name generator</h2>
            <p>Your alien name is: <span>{alienName}</span></p>
            <button onClick={() => setAlienName(randomizeName())}>Generate name</button>
        </section>
    );
};

// export default AlienNameGenerator;


export default AlienNameGenerator;
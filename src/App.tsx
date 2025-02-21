import './App.scss';
import SpaceAccordion from './widgets/SpaceAccordion/SpaceAccordion';
import AgeCalculator from './widgets/AgeCalculator/AgeCalculator';
import PlanetImage from './widgets/PlanetImage/PlanetImage';
import AlienNameGenerator from './widgets/AlienNameGenerator/AlienNameGenerator';
import CreatePlanets from './widgets/CreatePlanets/CreatePlanets';
import CreateAlien from './widgets/CreateAlien/CreateAlien';

function App() {
  return (
    <>
      <h1>Space Hub (React Widget Practice)</h1>
      <main>
        <SpaceAccordion />
        <AgeCalculator />
        <AlienNameGenerator />
        <PlanetImage />
        <CreatePlanets />
        <CreateAlien />
      </main>
    </>
  );
}

export default App;

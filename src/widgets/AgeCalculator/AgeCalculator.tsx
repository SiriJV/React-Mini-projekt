import { planets } from '../SpaceAccordion/SpaceAccordion';
import './AgeCalculator.scss';

const AgeCalculator = () => {
    return (
        <section className="AgeCalculator">
        <h2>Galactic age calculator</h2>
        <label>
          Your Earth age (in years):
          <input
            type="number"
            // value={earthAge}
            // onChange={handleAgeChange}
            min="0"
          />
        </label>
        <label>
          Select planet:
          <select>
          {/* value={selectedPlanet} onChange={handlePlanetChange}> */}
            {planets.map((planet) => (
              <option key={planet.name} value={planet.name}>
                {planet.name}
              </option>
            ))}
          </select>
        </label>

        <button>Calculate age</button>
        {/* onClick={handleSubmit} */}
        
        </section>
    )
}

export default AgeCalculator;

const handlePlanetChange = () => {
    
}
import './PlanetList.scss';
import { Planet } from '../SpaceAccordion';

type PanelProps = {
    planet: Planet;
    isActive: boolean;
    setIsActive: (state: boolean) => void;
};

const PlanetList = ({ planet, isActive, setIsActive }: PanelProps) => {
    return (
        <section className="panel">
            <h3>{planet.name}</h3>
            <button onClick={() => setIsActive(!isActive)}>
                {isActive ? "Hide" : "Show"}
            </button>
            {isActive && <p>{planet.description}</p>}
        </section>
    );
}

export default PlanetList;
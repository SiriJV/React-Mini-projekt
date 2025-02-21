import { useState } from 'react';
import './CreateAlien.scss';

function CreateAlien() {
  const [aliens, setAliens] = useState<string[]>([]);
  const [inputAlien, setInputAlien] = useState('');

  const addAlien = () => {
    inputAlien.trim() && setAliens([...aliens, inputAlien]);
    setInputAlien('');
  };

  const deleteAll = () => {
    setAliens([]);
  };

  return (
    <section className='CreateAlien'>
      <h2>Create alien</h2>
      <section className='CreateAlienInput'>
        <label>Add alien:</label>
        <input
          type='text'
          value={inputAlien}
          onChange={(e) => setInputAlien(e.target.value)}
          placeholder='Enter alien name'
          maxLength={20}
          onKeyDown={(e) => e.key === 'Enter' && addAlien()}
        />
        <button onClick={addAlien}>Add</button>
        <button onClick={deleteAll}>Delete all</button>
      </section>
      {aliens.length > 0 && (
        <ul className='AlienList'>
          {aliens.map((alien) => (
            <li>{alien}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default CreateAlien;

import {puppyList} from './data.js'
import { useState } from 'react'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
    //console.log(puppies);

    const handleClick = (id) => {
      setFeatPupId(id);
    }

    const featuredPup = puppies.find((pup)=> pup.id === featPupId);
    //console.log(featuredPup);

    return (
      <>
      <h1>Puppy Adoption Agency</h1>
      <h2>Click a puppy to learn more about them!</h2>
        <div className="App">
          {puppies.map((puppy) => (
            <div className="puppy-card" onClick={() => handleClick(puppy.id)} key={puppy.id}>
              {puppy.name}
            </div>
          ))}
        </div>
  
        {featPupId && featuredPup && (
          <div className="featured-puppy">
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </>
    );
  }

export default App

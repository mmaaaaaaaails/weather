import './App.css';
import WeatherDisplay from "./WeatherDisplay";
import React, { useState } from "react";

interface Iplaces {
    name: string,
    zip: string
}

const App = () => {

    const PLACES:Iplaces[] = [
        { name: "Minsk", zip: "220000" },
        { name: "Paris", zip: "75001" },
        { name: "Barcelona", zip: "08001" },
    ];

    const [activePlace, setActivePlace] = useState<number>(0);

  return (
    <div className="App">
        {PLACES.map((place, index:number) => (
            <button
                key={index}
                onClick={() => {
                    setActivePlace(index)
                }}
                className="app_btn"
            >
                {place.name}
            </button>
        ))}
        <WeatherDisplay
            key={activePlace}
            zip={PLACES[activePlace].zip}
        />
    </div>
  );
}

export default App;

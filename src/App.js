import React, { useEffect, useState } from "react";
import Title from './components/Title';
import Image from './components/Image';
import Explanation from './components/Explanation';
import "./App.css";
import Axios from 'axios';

function App() {
  const [nasaData, setNasaData] = useState({})
  useEffect(()  => {
    Axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => {
        console.log(response.data);
        setNasaData(response.data);
      })
      .catch(error => {console.log('Error Will Robinson! Error:', error)})
  }, []);

  return (
    <div className="App">
      <Title title={nasaData.title} />
      <Image image={nasaData.url} />
      <Explanation explanation={nasaData.explanation} />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun!
      </p>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Loader from './components/Loader/Loader';
import SeasonDisplay from './components/SeasonDisplay/SeasonDisplay';

const App = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  }, []);

  let content;

  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Loader message="Attemping to find your location..." />;
  }

  return content;
};

ReactDOM.render(<App />, document.getElementById('root'));

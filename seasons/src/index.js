import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './components/Loader/Loader';
import SeasonDisplay from './components/SeasonDisplay/SeasonDisplay';
import useLocation from './components/useLocation';

const App = () => {
  const [lat, errorMessage] = useLocation();

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

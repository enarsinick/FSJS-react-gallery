import React from 'react';

// API Key Import
import apiKey from '../config/config';

// Component imports
import PhotoContainer from './PhotoContainer';
import Nav from './Nav';
import NotFound from './NotFound';
import SearchForm from './SearchForm';

const App = () => {
  return (
    <div>
      <SearchForm />
      <Nav />
      <PhotoContainer />
    </div>
  );
}

export default App;

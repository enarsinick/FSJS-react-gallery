import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// API Key Import
import apiKey from '../config/config';

// Component imports
import PhotoContainer from './PhotoContainer';
import Nav from './Nav';
import NotFound from './NotFound';
import SearchForm from './SearchForm';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <SearchForm />
        <Nav />
        <Route exact path="/" component={PhotoContainer}/>
        <Route exact path="/cats" component={ () => <PhotoContainer title="Cats"/>}/>
        <Route exact path="/dogs" component={ () => <PhotoContainer title="Dogs"/>}/>
        <Route exact path="/computers" component={ () => <PhotoContainer title="Computers"/>}/>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// API Key Import
import apiKey from '../config/config';

// Component imports
import PhotoContainer from './PhotoContainer';
import Nav from './Nav';
import NotFound from './NotFound';
import SearchForm from './SearchForm';

class App extends Component {

  constructor() {
    super();
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunsets&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(response => {
      this.setState({images: response.photos.photo})
    })
    .catch(err => {
      console.log('Error fetching and parsing data', err);
    }); 
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <SearchForm />
          <Nav />
          <Switch>
            <Route exact path="/" component={ () => <PhotoContainer data={this.state.images}/>}/>
            <Route path="/cats" component={ () => <PhotoContainer title="Cats"/>}/>
            <Route path="/dogs" component={ () => <PhotoContainer title="Dogs"/>}/>
            <Route path="/computers" component={ () => <PhotoContainer title="Computers"/>}/>
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

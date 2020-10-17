import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// API Key Import
import apiKey from '../config/config';

// Component imports
import PhotoContainer from './PhotoContainer';
import Nav from './Nav';
import Error from './404';
import SearchForm from './SearchForm';

class App extends Component {

  constructor() {
    super();
    this.state = {
      home: [],
      cats: [],
      dogs: [],
      trees: [],
      isLoading: true
    };
  }

  // Once component mounts, make all the API calls needed
  componentDidMount() {
     this.handleSearch('sunsets', 'home');
     this.handleSearch('cats', 'cats');
     this.handleSearch('dogs', 'dogs');
     this.handleSearch('trees', 'trees');
  }

  // Function to carry out Flickr API call
  handleSearch = (query, state) => {
    // Set load state to true, just incase the function has already been used
    this.setState({isLoading: true})

    // Fetch request for data
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(response => {
      this.setState({
        [state]: response.photos.photo, 
        isLoading: false
      })
    })
    .catch(err => {
      console.log('Error fetching and parsing data', err);
    });

  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          {/* Search for components that gets passed the API call function */ }
          <SearchForm history={this.props.history} onSearch={this.handleSearch} />
          <Nav />
          <Switch>
            {/* All of the routes needed for the project */ }
            <Route exact path="/" render={ () => <PhotoContainer title={'Sunsets'} data={this.state.home} loading={this.state.isLoading} />} />
            <Route path="/cats" render={ () => <PhotoContainer title={'Cats'} data={this.state.cats} loading={this.state.isLoading} />} />
            <Route path="/dogs" render={ () => <PhotoContainer title={'Dogs'} data={this.state.dogs} loading={this.state.isLoading} />} />
            <Route path="/trees" render={ () => <PhotoContainer title={'Trees'} data={this.state.trees} loading={this.state.isLoading} />} />
            <Route path="/search" render={ () => <PhotoContainer title={'Search Results:'} data={this.state.search} loading={this.state.isLoading} />} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

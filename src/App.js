import React, { Component } from 'react';
import './App.scss';
import PhotoGrid from './PhotoGrid';
import {CircularProgress} from '@material-ui/core';

class App extends Component {
  
  state = {
    images: []
  }

  componentWillMount() {
    fetch('https://images-api.nasa.gov/search?q=mars&media_type=image')
      .then(response => response.json())
      .then(data => {
        let images = [];
        if (data != null) {
          data.collection.items.forEach(item => {
            let image = {
              link: item.links[0].href,
              description: item.data[0].description,
              creationDate: item.data[0].date_created
            }
            images.push(image);
          });
          this.setState({images : images});
        }
      }).catch(e => {
        console.error(e); 
      });
  }
  
  render() {
    if (this.state.images.length > 0) {
      return (
        <div className="App baskerville">
          <PhotoGrid gallery={this.state.images} />
        </div>
      );
    }
    return (
      <>
        <CircularProgress className="spinner" size={100}></CircularProgress>
      </>
    );
  }
}
export default App;

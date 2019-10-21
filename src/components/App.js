import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import ArtistPage from './artist/ArtistPage';
import AlbumPage from './artist/AlbumPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Route path="/" exact component={ArtistPage} />
            <Route path="/albums" exact component={AlbumPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

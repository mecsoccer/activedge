import React from 'react';
import { fetchArtists, fetchAlbums, fetchAlbumPhotos } from '../../actions';
import { connect } from 'react-redux';
import Header from '../Header';
import { Link } from 'react-router-dom';
import AlbumCard from './AlbumCard';
import '../styling/Properties.css';
import '../styling/Main.css';
import '../styling/Form.css';
import '../styling/Responsive.css';

class Albums extends React.Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  renderAlbumCard() {
    if (!this.props.albums.length) {
      return <div className="loader"></div>;
    }
    return (
      <section className="properties">
        {this.props.albums.map(prop =>
          <AlbumCard detail={prop} key={prop.id} />
        )}
      </section>
    );
  }

  render() {
    return (
      <>
      <div className="page-container">
        <Header />
        <div className="page-main">
            <div className="filter-section">
                <label className="left filter">Filter</label>
                <select className="property-type fivecol">
                    <option>All</option>
                </select>
                <span className="add-property-btn fit right pointer" title="add new property">
                  <Link to="/">
                  <button>artists</button>
                  </Link>
                </span>
            </div>
              {this.renderAlbumCard()}
            <div className="pagination align-center">
                <button>Previous</button>
                <span>{this.props.albums.length} of 1000 showing</span>
                <button>Next</button>
            </div>
        </div>
    </div>
    <div className="footer accent-bg-1">
        <p className="white-text align-center">© ActivEdge Exercise, 2019</p>
    </div>
    </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { albums: state.artist.artistAlbums };
}

export default connect(
  mapStateToProps, { fetchArtists, fetchAlbums, fetchAlbumPhotos }
)(Albums);

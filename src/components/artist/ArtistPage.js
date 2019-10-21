import React from 'react';
import { fetchArtists, fetchAlbums, fetchAlbumPhotos } from '../../actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header';
import ArtistCard from './ArtistCard';
import '../styling/Properties.css';
import '../styling/Main.css';
import '../styling/Form.css';
import '../styling/Responsive.css';

class Artists extends React.Component {
  componentDidMount() {
    this.props.fetchArtists();
  }

  renderProperties() {
    if (!this.props.artists.length) {
      return <div className="loader"></div>;
    }
    return (
      <section className="properties">
        {this.props.artists.map(prop =>
          <ArtistCard detail={prop} key={prop.id} />
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
                <p className="twenty-four">ARTISTS SHOWING</p>
                <span className="add-property-btn fit right pointer" title="add new property">
                <Link to="/albums">
                  <button>albums</button>
                  </Link>
                </span>
            </div>
              {this.renderProperties()}
            <div className="pagination align-center">
                <button>Previous</button>
                <span>{this.props.artists.length} of 1000 showing</span>
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
  return { artists: state.artist.artists };
}

export default connect(
  mapStateToProps, { fetchArtists, fetchAlbums, fetchAlbumPhotos }
)(Artists);

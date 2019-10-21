import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAlbumPhotos } from '../../actions';
import AlbumPhoto from '../img/album.jpg';

class AlbumCard extends React.Component {
  componentDidMount() {
      //this.props.fetchAlbumPhotos(this.props.detail.id)
  }

  render() {
    return (
        <div className="one-property">
              <div className="flex flex-ai-ct flex-jc-ct property-image">
                  <img alt="img" src={AlbumPhoto} />
              </div>
            <div className="property-desc">
                <div>
                    <span className="cost twenty accent-fg-3">{this.props.detail.title}</span>
                </div>
                <p className="street bold"></p>
                <div>
                    <span className="city bold"></span>
                </div>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return { photo: state.artist.albumPhotos };
  }
  
  export default connect(
    mapStateToProps, { fetchAlbumPhotos }
  )(AlbumCard);

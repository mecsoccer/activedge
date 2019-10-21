import React from 'react';
import { connect } from 'react-redux';
//import { selectProperty, showFormModal } from '../../actions';
import User from '../img/johndoe.jpg';

class Property extends React.Component {
  render() {
    return (
        <div className="one-property">
              <div className="flex flex-ai-ct flex-jc-ct property-image">
                  <img alt="img" src={User} />
              </div>
            <div className="property-desc">
                <div>
                    <span className="cost twenty accent-fg-3">{this.props.detail.name}</span>
                </div>
                <p className="street bold">{this.props.detail.address.street}</p>
                <div>
                    <span className="city bold">{this.props.detail.address.city}</span>
                </div>
            </div>
        </div>
    );
  }
}

export default connect(null, {})(Property);

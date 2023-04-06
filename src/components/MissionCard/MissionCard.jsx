import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './MissionCard.css';

export default class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <div className="name-element">
          <p data-testid="mission-name">
            {name}
          </p>
        </div>
        <div className="other-elements">
          <p data-testid="mission-year">
            {year}
          </p>
          <p className="country" data-testid="mission-country">
            {country}
          </p>
          <p data-testid="mission-destination">
            {destination}
          </p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  country: PropTypes.string,
  destination: PropTypes.string,
  name: PropTypes.string,
  year: PropTypes.string,
}.isRequired;

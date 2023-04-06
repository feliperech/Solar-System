import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './PlanetCard.css';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <img className="images" src={ planetImage } alt={ `Planeta ${planetName}` } />
        <p className="planet-names" data-testid="planet-name">
          { planetName }
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string,
  planetName: PropTypes.string,
}.isRequired;

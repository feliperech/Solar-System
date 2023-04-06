import React, { Component } from 'react';
import PlanetCard from '../PlanetCard/PlanetCard';
import Title from '../Title/Title';
import planets from '../../data/planets';
import './SolarSystem.css';

export default class extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planets-list">
          {
            planets.map((element) => (
              <div
                className="planet-elements"
                key={ element.name }

              >
                <PlanetCard
                  planetName={ element.name }
                  planetImage={ element.image }
                />
              </div>
            ))
          }
        </div>

      </div>
    );
  }
}

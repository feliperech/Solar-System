import React, { Component } from 'react';
import MissionCard from '../MissionCard/MissionCard';
import Title from '../Title/Title';
import missions from '../../data/missions';
import './Missions.css';

export default class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missions-container">
          {
            missions.map((element) => (
              <div
                className="missions-element"
                key={ element.name }
              >
                <MissionCard
                  name={ element.name }
                  year={ element.year }
                  country={ element.country }
                  destination={ element.destination }
                />
              </div>
            ))

          }
        </div>

      </div>
    );
  }
}

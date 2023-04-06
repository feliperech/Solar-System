import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Title.css';

export default class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <div className="title">
        <h2 className="headline">
          { headline }
        </h2>
      </div>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

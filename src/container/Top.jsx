import React, { Component } from 'react';
import Header from '../components/App/Header/Header';
import Intro from '../components/App/Intro/Intro';

export default class Top extends Component {
  render() {
    return (
      <div>
        <Header />
        <Intro />
      </div>
    );
  }
}

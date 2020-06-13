import React, { Component } from 'react';
import Projects from '../components/App/Projects/Projects';
import Future from '../components/App/Future/Future';

export default class Bottom extends Component {
  render() {
    return (
      <div>
        <Projects />
        <Future />
      </div>
    );
  }
}

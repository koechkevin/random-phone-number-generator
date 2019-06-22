import React, { Component } from 'react';
import Generator from './Generator';

class Home extends Component {
  render() {
    return (
      <div className="home-body">
        <div className="side-nav">
          Recently Generated
        </div>
        <div className="body">
          <div className="generator">
            <Generator/>
          </div>
          <div className="manage">
          </div>
          <div className="table-body">
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

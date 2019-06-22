import React, { Component } from 'react';

class Generator extends Component {
  render() {
    return (
      <div className="gen">
        <form onSubmit={(e) => { e.preventDefault(); }}>
          Enter the number of phone numbers to generate
          <br/>
          <input type="number"/>
          <input type="submit" value="Generate"/>
        </form>
      </div>
    );
  }
}

export default Generator;

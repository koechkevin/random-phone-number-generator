import React, { Component } from 'react';
import propTypes from 'prop-types';

class Generator extends Component {
  state = {
    number: 0,
  };

  static propTypes = {
    action: propTypes.func.isRequired,
    getAllNumbers: propTypes.func.isRequired,
    generateError: propTypes.string,
  };

  static defaultProps = {
    generateError: '',
  };

  handleChange = (e) => {
    this.setState({
      number: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { action, getAllNumbers } = this.props;
    const { number } = this.state;
    action(parseInt(number, 10), getAllNumbers, () => this.setState({ number: 0 }));
  };

  render() {
    const { number } = this.state;
    const { generateError } = this.props;
    return (
      <div className="generator">
        <div className="gen">
          <form onSubmit={this.handleSubmit}>
          Enter the number of phone numbers to generate
            <br/>
            <input className={generateError} type="number" onChange={this.handleChange} value={number || ''}/>
            <input type="submit" value="Generate"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Generator;

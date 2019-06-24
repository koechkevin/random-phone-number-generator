import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Generator from './Generator';
import { generateAction, recentlyGeneratedAction, getAllNumbers } from '../redux/actions';
import { SideNav, Table, Manage } from './index';

class Home extends Component {
  state = {
    order: 'DESC',
    sortCriteria: 'id',
    page: 0,
  };

  static propTypes = {
    generate: propTypes.func.isRequired,
    recentlyCreated: propTypes.array.isRequired,
    getRecent: propTypes.func.isRequired,
    getAllNumbers: propTypes.func.isRequired,
    allNumbers: propTypes.array.isRequired,
    pagination: propTypes.object.isRequired,
    generateError: propTypes.string,
  };

  static defaultProps = {
    generateError: '',
  };

  componentDidMount() {
    const { getRecent, getAllNumbers: all, pagination: { currentPage } } = this.props;
    getRecent();
    all(`?orderBy=id&order=DESC&page=${currentPage}`);
  }

  sortBy = (sortCriteria) => {
    const { order, page } = this.state;
    this.setState({ sortCriteria });
    const { getAllNumbers: all, pagination: { currentPage } } = this.props;
    all(`?orderBy=${sortCriteria}&order=${order}&page=${page || currentPage}`);
  };

  toggleOrder = () => {
    const { order, sortCriteria, page } = this.state;
    const newOrder = order === 'DESC' ? 'ASC' : 'DESC';
    this.setState({ order: newOrder });
    const { getAllNumbers: all, pagination: { currentPage } } = this.props;
    all(`?orderBy=${sortCriteria}&order=${newOrder}&page=${page || currentPage}`);
  };

  changePage = (page) => {
    const { getAllNumbers: all } = this.props;
    const { order, sortCriteria } = this.state;
    all(`?orderBy=${sortCriteria}&order=${order}&page=${page}`);
  };

  changePageInput = e => this.setState({ [e.target.name]: e.target.value });

  enterPage = (e) => {
    const { getAllNumbers: all } = this.props;
    const { order, sortCriteria, page } = this.state;
    if (page && e.keyCode === 13) {
      all(`?orderBy=${sortCriteria}&order=${order}&page=${page}`);
      this.setState({ page: 0 });
    }
  };

  render() {
    const {
      generate, recentlyCreated, allNumbers, generateError,
      getAllNumbers: all, pagination, pagination: { currentPage },
    } = this.props;
    const {
      order, sortCriteria, page: value,
    } = this.state;
    const getAll = () => all(`?orderBy=${sortCriteria}&order=${order}&page=${value || currentPage}`);
    return (
      <div className="home-body">
        <SideNav recentlyCreated={recentlyCreated}/>
        <div className="body">
          <Generator
            action={generate}
            getAllNumbers={getAll}
            generateError={generateError}
          />
          <Manage
            toggleOrder={this.toggleOrder}
            sortBy={this.sortBy}
            order={order}
          />
          <Table
            onChange={this.changePageInput}
            changePage={this.changePage}
            pagination={pagination}
            numbers={allNumbers}
            value={parseInt(value, 10)}
            enterPage={this.enterPage}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  generate: {
    recentlyCreated, allNumbers, pagination, generateError,
  },
}) => ({
  recentlyCreated, allNumbers, pagination, generateError,
});

export default connect(
  mapStateToProps, { generate: generateAction, getRecent: recentlyGeneratedAction, getAllNumbers },
)(Home);

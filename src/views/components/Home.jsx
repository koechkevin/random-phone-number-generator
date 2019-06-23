import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Generator from './Generator';
import { generateAction, recentlyGeneratedAction, getAllNumbers } from '../redux/actions';
import { SideNav, Table } from './index';

class Home extends Component {
  state = {
    order: 'DESC',
    sortCriteria: 'id',
  };

  static propTypes = {
    generate: propTypes.func.isRequired,
    recentlyCreated: propTypes.array.isRequired,
    getRecent: propTypes.func.isRequired,
    getAllNumbers: propTypes.func.isRequired,
    allNumbers: propTypes.array.isRequired,
    pagination: propTypes.object.isRequired,
  };

  componentDidMount() {
    const { getRecent, getAllNumbers: all, pagination: { currentPage } } = this.props;
    getRecent();
    all(`?orderBy=id&order=DESC&page=${currentPage}`);
  }

  sortBy = (sortCriteria) => {
    const { order } = this.state;
    this.setState({ sortCriteria });
    const { getAllNumbers: all } = this.props;
    all(`?orderBy=${sortCriteria}&order=${order}`);
  };

  toggleOrder = () => {
    const { order, sortCriteria } = this.state;
    const newOrder = order === 'DESC' ? 'ASC' : 'DESC';
    this.setState({ order: newOrder });
    const { getAllNumbers: all } = this.props;
    all(`?orderBy=${sortCriteria}&order=${newOrder}`);
  };

  changePage = (page) => {
    const { getAllNumbers: all } = this.props;
    const { order, sortCriteria } = this.state;
    all(`?orderBy=${sortCriteria}&order=${order}&page=${page}`);
  };

  manage = () => {
    const { order } = this.state;
    return (
      <div className="manage">
        <span className="manage-head">All Generated Numbers</span>
        <button className="desc" onClick={this.toggleOrder}>{order === 'DESC' ? 'Descending' : 'Ascending ..'}</button>
        <button className="rec" onClick={() => this.sortBy('recently_generated')}>Date Created</button>
        <button className="id" onClick={() => this.sortBy('id')}>Id</button>
        <button className="mob" onClick={() => this.sortBy('mobile')}>Mobile Number</button>
        <span className="sort">Sort by</span>
      </div>
    );
  };

  render() {
    const {
      generate, recentlyCreated, allNumbers, getAllNumbers: all, pagination,
    } = this.props;
    const { order, sortCriteria } = this.state;
    const Manage = this.manage;
    const getAll = () => all(`?orderBy=${sortCriteria}&order=${order}`);
    return (
      <div className="home-body">
        <SideNav recentlyCreated={recentlyCreated}/>
        <div className="body">
          <Generator action={generate} getAllNumbers={getAll}/>
          <Manage />
          <Table changePage={this.changePage} pagination={pagination} numbers={allNumbers} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ generate: { recentlyCreated, allNumbers, pagination } }) => ({
  recentlyCreated, allNumbers, pagination,
});

export default connect(
  mapStateToProps, { generate: generateAction, getRecent: recentlyGeneratedAction, getAllNumbers },
)(Home);

import React from 'react';
import propTypes from 'prop-types';
import moment from 'moment';

export const RecentlyGenerated = ({ each }) => (
  <div key={each.mobile} className="recently-created">
    <div className="align">
      {`0${each.mobile}`}
    </div>
  </div>
);

export const SideNav = ({ recentlyCreated }) => (
  <div className="side-nav">
    <p className="side-head">
      <span className="f">
       Recently Generated
      </span>
    </p>
    {recentlyCreated.map(e => <RecentlyGenerated key={e.mobile} each={e}/>)}
  </div>
);

export const TableHead = () => (
  <thead>
    <tr className="table-head">
      <th>Entry key</th>
      <th>Mobile Number</th>
      <th>Date Created</th>
      <th>Time Generated</th>
      <th>Generation count</th>
    </tr>
  </thead>
);

export const Pagination = ({
  pagination: { currentPage, pageCount }, value, onChange, changePage, enterPage,
}) => (
  <div className="pagination">
    <button className="previous" onClick={() => changePage(currentPage - 1)}>&lsaquo;</button>
    <span>
      Page
      <span className="page">
        <input
          name="page"
          type="text"
          id="page-input"
          onChange={onChange}
          value={value || currentPage}
          onKeyUp={enterPage}
        />
      </span>of
      <span>
        { pageCount }
      </span>
    </span>
    <button className="next" onClick={() => changePage(currentPage + 1)}>&rsaquo;</button>
  </div>
);

export const TableRow = ({ number }) => (
  <tr className="table-row">
    <td>{number.id}</td>
    <td className="n">{`0${number.mobile}`}</td>
    <td>{moment(number.createdAt).format('DD-MMM-YYYY')}</td>
    <td>{moment(number.createdAt).format('hh:mm:A')}</td>
    <td>{number.recently_generated}</td>
  </tr>
);

export const Table = ({
  numbers, pagination, changePage, onChange, value, enterPage,
}) => (
  <div className="table-body">
    <table>
      <TableHead/>
      <tbody>
        {numbers.map(each => <TableRow key={each.mobile} number={each} />)}
      </tbody>
    </table>
    <Pagination
      enterPage={enterPage}
      value={value}
      onChange={onChange}
      changePage={changePage}
      pagination={pagination}
    />
  </div>
);

export const Manage = ({ order, toggleOrder, sortBy }) => (
  <div className="manage">
    <span className="manage-head">All Generated Numbers as at </span>
    <button className="desc" onClick={toggleOrder}>{order === 'DESC' ? 'Descending' : 'Ascending ..'}</button>
    <button className="rec" onClick={() => sortBy('recently_generated')}>Date Created</button>
    <button className="id" onClick={() => sortBy('id')}>Id</button>
    <button className="mob" onClick={() => sortBy('mobile')}>Mobile Number</button>
    <span className="sort">Sort by</span>
  </div>
);

Manage.propTypes = {
  order: propTypes.string.isRequired,
  toggleOrder: propTypes.func.isRequired,
  sortBy: propTypes.func.isRequired,
};

RecentlyGenerated.propTypes = {
  each: propTypes.object.isRequired,
};

SideNav.propTypes = {
  recentlyCreated: propTypes.array.isRequired,
};

TableRow.propTypes = {
  number: propTypes.object.isRequired,
};

Pagination.propTypes = {
  pagination: propTypes.object.isRequired,
  changePage: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.number.isRequired,
  enterPage: propTypes.func.isRequired,
};

Table.propTypes = {
  numbers: propTypes.array.isRequired,
  pagination: propTypes.object.isRequired,
  changePage: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.number.isRequired,
  enterPage: propTypes.func.isRequired,
};
export default {};

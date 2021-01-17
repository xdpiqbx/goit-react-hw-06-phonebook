import PropTypes from 'prop-types';
import React from 'react';

import { connect } from 'react-redux';
import actions from '../../redux/actions';

import s from './Filter.module.scss';

const Filter = ({ filter, filterHandler }) => {
  return (
    <div className={s.container}>
      <h3>Find contacts by name</h3>
      <input name="filter" value={filter} onChange={filterHandler} />
    </div>
  );
};

const mapStateToProps = ({ contacts }) => ({
  filter: contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  filterHandler: event => dispatch(actions.filterContacts(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.protoTypes = {
  filter: PropTypes.string,
  filterHandler: PropTypes.func,
};

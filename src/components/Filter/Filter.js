import PropTypes from 'prop-types';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { getFilter } from '../../redux/selectors';

import s from './Filter.module.scss';

// const Filter = ({ filter, filterHandler }) => {
const Filter = () => {
  // const filter = useSelector(state => state.contacts.filter);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <h3>Find contacts by name</h3>
      {/* <input name="filter" value={filter} onChange={filterHandler} /> */}
      <input
        name="filter"
        value={filter}
        onChange={event => dispatch(actions.filterContacts(event.target.value))}
      />
    </div>
  );
};

// const mapStateToProps = ({ contacts }) => ({
//   filter: contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   filterHandler: event => dispatch(actions.filterContacts(event.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

export default Filter;

Filter.protoTypes = {
  filter: PropTypes.string,
  filterHandler: PropTypes.func,
};

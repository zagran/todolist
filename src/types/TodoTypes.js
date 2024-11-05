// src/types/TodoTypes.js
import PropTypes from 'prop-types';

export const TodoPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
});
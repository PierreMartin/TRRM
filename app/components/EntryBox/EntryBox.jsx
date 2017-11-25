import React from 'react';
import PropTypes from 'prop-types';
import styles from './css/entrybox';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const EntryBox = ({ placeholder, handleChangeMessage, handleSubmitMessage, value }) => (
  <div className={cx('entrybox')}>
    <h1 className={cx('header')}>Add a course here</h1>
    <input
      type="text"
      onChange={handleChangeMessage}
      onKeyDown={handleSubmitMessage}
      value={value}
      placeholder={placeholder}
			className={cx('input')}
    />
  </div>
);

EntryBox.propTypes = {
	placeholder: PropTypes.string.isRequired,
	handleChangeMessage: PropTypes.func.isRequired,
	handleSubmitMessage: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired
};

export default EntryBox;

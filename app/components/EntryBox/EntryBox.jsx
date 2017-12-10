import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'semantic-ui-react';
import styles from './css/entrybox.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const EntryBox = ({ placeholder, handleChangeMessage, handleSubmitMessage, value }) => (
  <div className={cx('entrybox')}>
		<Divider as='h4' horizontal style={{ margin: '3em 0em', textTransform: 'uppercase' }}>Add a course here</Divider>
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

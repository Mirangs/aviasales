import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Checkbox.scss';

const Checkbox = ({ label, className,  checked, disabled, onCheckboxChange, ...attrs}) => {
  const classes = classNames(
    'check__input',
    className,
    { checked },
  );

  return (
    <label className="check">
    <input 
      type="checkbox"
      checked={checked}
      disabled={disabled}
      className={classes}
      onChange={onCheckboxChange}
      {...attrs}
    />
      <span className="check__box" />
      {label}
    </label>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
}

Checkbox.defaultProps = {
  label: 'Default Checkbox',
  className: '',
  checked: false,
  disabled: false,
}

export default Checkbox;

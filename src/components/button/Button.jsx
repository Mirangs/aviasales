import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.scss';

const Button = ({ children, onClick, className, disabled, active, ...attrs }) => {
  const onClickAction = evt => {
    if (disabled) {
      evt.preventDefault();
    } else {
      return onClick(evt);
    }
  };

  const classes = classNames(
    'btn',
    className,
    { active },
  );

  const Tag = attrs.href ? 'a' : 'button';

  return (
    <Tag
      className={classes}
      disabled={disabled}
      onClick={onClickAction}
      {...attrs}
    >
      {children}
    </Tag>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

Button.defaultProps = {
  children: 'Default Button',
  onClick: () => {},
  className: '',
  disabled: false,
  active: false,
};

export default Button;

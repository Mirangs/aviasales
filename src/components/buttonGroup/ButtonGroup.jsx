import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './ButtonGroup.scss';

const ButtonGroup = ({ children, className, vertical, ...attrs }) => {
  const classes = classNames(
    'btn-group',
    className,
    { vertical },
  );

  return (
    <div 
      className={classes}
      {...attrs}
    >
        {children}
    </div>
  );
}

ButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  vertical: PropTypes.bool,
};

ButtonGroup.defaultProps = {
  children: null,
  className: '',
  vertical: false,
};

export default ButtonGroup;

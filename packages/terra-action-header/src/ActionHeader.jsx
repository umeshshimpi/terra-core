import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './ActionHeader.scss';

const cx = classNames.bind(styles);

const propTypes = {
 /*
 * Content to be displayed as the name
 */
  name: PropTypes.string,
};

const defaultProps = {
  name: 'default',
};

const ActionHeader = ({ name, ...customProps }) => {
  const ActionHeaderClassNames = cx([
    'action-header',
    customProps.className,
  ]);

  return (<div {...customProps} className={ActionHeaderClassNames}>{name}</div>);
};

ActionHeader.propTypes = propTypes;
ActionHeader.defaultProps = defaultProps;

export default ActionHeader;

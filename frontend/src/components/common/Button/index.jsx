import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import style from './index.module.sass'

const Button = ({ title, className, onClick, sx }) => (
  <button
    type='button'
    className={classNames(style.button, className)}
    onClick={() => onClick()}
    style={{ ...sx }}
  >
    {title}
  </button>
)

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  sx: PropTypes.objectOf(
    PropTypes.string,
  ),
}

Button.defaultProps = {
  className: null,
  onClick: () => { },
  sx: null
}

export default Button

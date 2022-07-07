import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import style from './index.module.sass'

const Divider = ({ className, sx }) => (
  <aside
    style={{ ...sx }}
    className={
      classNames(className, style.divider)
    }
  />
)

Divider.propTypes = {
  className: PropTypes.string,
  sx: PropTypes.objectOf(
    PropTypes.string
  )
}

Divider.defaultProps = {
  className: null,
  sx: null,
}

export default Divider

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import style from './index.module.sass'

const ContentContainer = ({children, background, className, sx, id }) => (

  <section
    id={id}
    className={
      classNames(style.container, style.indent, className)
    }
    style={{
      ...sx,
      backgroundColor: background,
    }}
  >
    {children}
  </section>
)

ContentContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  sx: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  background: PropTypes.string,
  id: PropTypes.string,
}

ContentContainer.defaultProps = {
  sx: null,
  background: 'white',
  className: null,
  id: null,
}

export default ContentContainer

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import style from './index.module.sass'

const TextBox = ({ sx, title, paragraph }) => (

  <section
    className={
      classNames(style.typography)
    }
    style={{
      ...sx
    }}>
    <h2 className={style.title}>
      {title}
    </h2>
    <article className={style.paragraph}
    >
      {paragraph}
    </article>
  </section>
)

TextBox.propTypes = {
  sx: PropTypes.objectOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
}

TextBox.defaultProps = {
  sx: null,
}

export default TextBox

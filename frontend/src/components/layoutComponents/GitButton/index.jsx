import React from 'react'
import PropTypes from 'prop-types'

import style from './index.module.sass'

const GitButton = ({ projectLink }) => (
  <div className={style.buttonWrapper}>
    <div className={style.button}>
      <a className={style.button_text} href={projectLink}>ПРОЕКТ</a>
    </div>
  </div>
)

GitButton.propTypes = {
  projectLink: PropTypes.string
}

GitButton.defaultProps = {
  projectLink: null,
}

export default GitButton


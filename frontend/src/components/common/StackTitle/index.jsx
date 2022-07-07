import React from 'react'
import PropTypes from 'prop-types'

import style from './index.module.sass'

const Stack = ({ id }) => (
  <h2
    id={id}
    className={style.stack}>
    стек
  </h2>
)

Stack.propTypes = {
  id: PropTypes.string,
}

Stack.defaultProps = {
  id: null,
}
export default Stack

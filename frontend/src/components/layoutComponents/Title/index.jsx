import classNames from 'classnames'
import React from 'react'

import style from './index.module.sass'

const Title = () => (
  <section className={style.title_wrapper}>
    <article className={classNames(
      style.title,
      style.title_animate,
      style.title_border_animate)}>
      <p>Портфолио</p>
    </article>
  </section>
)

export default Title

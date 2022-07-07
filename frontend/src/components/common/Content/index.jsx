import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Divider from 'components/common/Divider'
import style from './index.module.sass'

const Content = ({ children, sectionSX, childrenSX, avatar, className, sx, sectionName }) => (

  <section
    className={
      classNames(style.container, className)
    }
    style={{ ...sx }}>
    <div
      className={style.titleBox}>
      <picture className={avatar ? style.avatar : null}>
        {avatar}
      </picture>
      <h1 className={sectionName ? style.title : null}
        style={{ ...sectionSX }}
      >
        <Divider className={sectionName ? null : style.hidden} />
        {sectionName}
        <Divider className={sectionName ? null : style.hidden} />
      </h1>
    </div>
    <article
      className={style.children}
      style={{ ...childrenSX }}>
      {children}
    </article>
  </section>
)

Content.propTypes = {
  sectionSX: PropTypes.objectOf(PropTypes.string),
  childrenSX: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  sx: PropTypes.objectOf(PropTypes.string),
  sectionName: PropTypes.string,
  avatar: PropTypes.node,
}

Content.defaultProps = {
  sectionSX: null,
  childrenSX: null,
  sx: null,
  className: null,
  sectionName: null,
  avatar: null,
}

export default Content

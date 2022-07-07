import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'

import style from './index.module.sass'

const Card = ({ isLink, title, value, icon, className }) => (

  <article
    className={
      classNames(style.contact, className)
    }>
    <picture className={style.icon}>
      {icon}
    </picture>
    <address className={style.address}>
      {isLink ? (
        <a
          className={style.link}
          rel='noreferrer'
          target='_blank'
          href={value}>
          {title}
        </a>
      ) : (
        <div
          className={style.link}
        >
          {title}
        </div>)
      }
    </address>
  </article>
)

Card.propTypes = {
  isLink: PropTypes.bool,
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
  className: PropTypes.string,
}

Card.defaultProps = {
  isLink: false,
  className: null,
  icon: <LocalPhoneIcon />
}

export default Card

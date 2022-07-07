import React, { useState } from 'react'

import PropTypes from 'prop-types'
import randomColor from 'randomcolor'
import TagCloud from 'react-tag-cloud'

import useScreenDimensions from 'hooks/useScreenDimensions'
import useInterval from 'hooks/useInterval'
import { randomFontSize, randomWordRegister } from 'utils/Utils'
import style from './index.module.sass'

const CloudSkills = ({ skills }) => {
  const [count, setCount] = useState(true)
  const { width } = useScreenDimensions()
  const screen = {
    max: 80,
    min: 20,
  }
  if (width < 1020) {
    screen.max = 60
  }

  if (width < 760) {
    screen.min = 10
    screen.max = 30
  }
  useInterval(() => {
    setCount(!count)
  }, 4000)
  const cloud = skills.map((skill) => <div
    style={{
      textTransform: randomWordRegister(),
      fontSize: randomFontSize(screen.min, screen.max),
    }}
    key={skill.skill_name}>{skill.skill_name}</div>)

  return (
    <section className={style.cloudWrapper}>
      <article className={style.cloudBorder}>
        <TagCloud
          style={{
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: () => randomColor(),
            padding: 5,
            width: '100%',
            height: '100%'
          }}>
          {cloud}
        </TagCloud>
      </article>
    </section>
  )
}

export default CloudSkills

CloudSkills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ])
    )),
}

CloudSkills.defaultProps = {
  skills: [
    'Jango',
    'Python',
    'DRF',
    'Selenium',
    'BeautifullSoup',
    'React',
    'JavaScript',
    'Redux',
    'axios',
    'React-Router',
    'CSS',
    'HTML',
    'MUI',
    'Bootstrap',
  ]
}

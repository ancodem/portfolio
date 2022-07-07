import React from 'react'
import { useSelector } from 'react-redux'
import ParticlesBg from 'particles-bg'
import { Outlet } from 'react-router-dom'

import useScreenDimensions from 'hooks/useScreenDimensions'

import Title from 'components/layoutComponents/Title'
import Menu from 'components/layoutComponents/Menu'
import GitButton from 'components/layoutComponents/GitButton'

import style from 'components/layoutComponents/Layout/index.module.sass'

const Layout = () => {

  const { height } = useScreenDimensions()

  document.documentElement.style.setProperty('--vh', `${height * 0.01}px`)

  const {
    projectLink,
  } = useSelector(state => ({
    projectLink: state.persData.projectLink
  }))

  return (
    <>
      <header className={style.header}>
        <ParticlesBg type="circle" bg />
        <Menu />
        <Title />
        <GitButton projectLink={projectLink} />
      </header>
      <Outlet />
    </>
  )
}

export default Layout

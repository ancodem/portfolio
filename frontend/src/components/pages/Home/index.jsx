import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import getData from 'service/actions'
import {
  Avatar,
  Button,
  Card,
  Content,
  ContentContainer,
  Divider,
  StackTitle,
  TextBox,
  CloudSkills
} from 'components/common'

import {
  greyBackground,
  contentAlign,
  dividerWidth,
} from './styles'

import {
  VkIcon,
  GitHubIcon,
  MailIcon,
  PhoneIcon,
} from './icons'

const Home = () => {

  const location = useLocation()
  const dispatch = useDispatch()
  const candidateName = location.pathname

  const {
    fullName,
    contacts,
    education,
    experience,
    skills,
    avatar,
    resumeLink,
  } = useSelector(state => ({
    fullName: state.persData.fullName,
    contacts: state.persData.contacts,
    education: state.persData.education,
    experience: state.persData.experience,
    skills: state.persData.skills,
    avatar: state.persData.avatar,
    resumeLink: state.persData.resumeLink,
  }))

  useEffect(() => {
    const abortController = new AbortController()

    dispatch(getData(candidateName, abortController.signal))
    return () => abortController.abort()
  }, [])

  const getNickName = (link) => {
    const splitArray = link.split('/')
    return splitArray[splitArray.length - 1]
  }

  return (
    <main>

      {/* CONTACTS --------------------------------------------------------*/}
      <ContentContainer
        id='contact'
        background={greyBackground}
      >
        <Content
          sectionName={fullName}
          childrenSX={contentAlign}
          avatar={<Avatar src={avatar} />} >
          <Card
            icon={<PhoneIcon />}
            title={contacts.phone_number}
            value='#' />
          <Card
            title={
              `VK@${getNickName(contacts.vk)}`
            }
            isLink
            value={contacts.vk}
            icon={< VkIcon />} />
          <Card
            title={
              `GitHub@${getNickName(contacts.git_hub)}`
            }
            isLink
            value={contacts.git_hub}
            icon={<GitHubIcon />} />
          <Card
            title={
              `GitFlic@${getNickName(contacts.git_flic)}`
            }
            isLink
            value={contacts.git_flic}
            icon={<GitHubIcon />} />
          <Card
            title={contacts.email}
            value={contacts.email}
            icon={< MailIcon />} />
          <Button
            onClick={() => window.open(resumeLink)}
            title='скачать резюме' />
        </Content>
      </ContentContainer>

      {/* EDUCATION -------------------------------------------------------*/}
      <ContentContainer id='education'>
        <Content sectionName='образование'>
          {education.map(edu =>
            <TextBox
              key={edu.edu_type}
              title={edu.edu_type}
              paragraph={edu.edu_description}
            />
          )}
        </Content>
      </ContentContainer>

      <Divider sx={dividerWidth} />

      {/* EXPERIENCE ------------------------------------------------------*/}
      <ContentContainer id='experience' >
        <Content sectionName='Опыт работы'>
          {experience.map(exp =>
            <TextBox
              key={exp.exp_type}
              title={exp.exp_type}
              paragraph={exp.exp_description}
            />
          )}
        </Content>
      </ContentContainer>

      {/* STACK -----------------------------------------------------------*/}
      <StackTitle id='stack' />
      <CloudSkills skills={skills} />

    </main>
  )
}

export default Home

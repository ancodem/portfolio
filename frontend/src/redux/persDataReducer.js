import {
  SET_CANDIDATE_DATA,
} from 'service/constants'

const initialState = {
  fullName: '',
  contacts: {
    email: '',
    git_flic: '',
    git_hub: '',
    phone_number: '',
    vk: '',
  },
  education: [{
    edu_type: '',
    edu_description: '',
  }],
  experience: [{
    exp_type: '',
    exp_description: '',
  }],
  skills: [{
    skill_name: '',
    skill_icon: '',
  }],
  avatar: '',
  resumeLink: '',
  projectLink: '',
}

const defaultAction = {}

const persDataReducer = (state = initialState, action = defaultAction) => {
  switch (action.type) {
  case SET_CANDIDATE_DATA:
    return {
      ...state,
      fullName: action.payload.full_name,
      contacts: action.payload.contacts,
      education: action.payload.education,
      experience: action.payload.experience,
      skills: action.payload.skills,
      avatar: action.payload.avatar,
      resumeLink: action.payload.resume_link,
      projectLink: action.payload.project_link,
    }
  default:
    return {
      ...state
    }
  }
}

export default persDataReducer

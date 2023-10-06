// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectTimeLineDetails} = props
  const {
    // id,
    // categoryId,
    // title,
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectTimeLineDetails

  return (
    <li>
      <img src={imageUrl} className="project-img" alt="project" />
      <div className="card-upper-cont">
        <h1 className="title-txt">{projectTitle}</h1>
        <div className="time-cont">
          <AiFillCalendar className="time-icon" />
          <p className="time-txt">{duration}</p>
        </div>
      </div>
      <p className="desc-txt">{description}</p>
      <a href={projectUrl} className="link" target="_blank" rel="noreferrer">
        Visit
      </a>
    </li>
  )
}

export default ProjectTimelineCard

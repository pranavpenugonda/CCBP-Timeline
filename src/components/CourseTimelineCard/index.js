// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseTimeLineDetails} = props
  const {
    // id,
    // categoryId,
    // title,
    courseTitle,
    description,
    duration,
    tagsList,
  } = courseTimeLineDetails

  return (
    <li className="list-item">
      <div className="card-upper-cont">
        <h1 className="title-txt">{courseTitle}</h1>
        <div className="time-cont">
          <AiFillClockCircle className="time-icon" />
          <p className="time-txt">{duration}</p>
        </div>
      </div>
      <p className="desc-txt">{description}</p>
      <ul className="ul-list">
        {tagsList.map(eachTag => (
          <li className="tag-cont">
            <p className="tag-name">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default CourseTimelineCard

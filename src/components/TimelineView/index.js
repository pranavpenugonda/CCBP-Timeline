// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const items = [
  {title: '10 DECEMBER 2020'},
  {title: '21 DECEMBER 2020'},
  {title: '5 JANUARY 2021'},
  {title: '7 JANUARY 2021'},
  {title: '30 JANUARY 2021'},
  {title: '6 FEBRUARY 2021'},
  {title: '15 FEBRUARY 2021'},
  {title: '15 MARCH 2021'},
  {title: '20 MARCH 2021'},
  {title: '30 APRIL 2021'},
  {title: '26 MAY 2021'},
]

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="bg-cont">
      <div>
        <h1 className="heading-2">
          <span className="heading-1">MY JOURNEY OF </span>CCBP 4.0
        </h1>
      </div>
      <div className="chrono-bg-cont">
        <ul className="ul-cont">
          <Chrono mode="VERTICAL_ALTERNATING" items={items}>
            {timelineItemsList.map(eachTimeLine => {
              if (eachTimeLine.categoryId === 'COURSE') {
                return (
                  <CourseTimelineCard
                    key={eachTimeLine.id}
                    courseTimeLineDetails={eachTimeLine}
                  />
                )
              }
              return (
                <ProjectTimelineCard
                  key={eachTimeLine.id}
                  projectTimeLineDetails={eachTimeLine}
                />
              )
            })}
          </Chrono>
        </ul>
      </div>
    </div>
  )
}

export default TimelineView

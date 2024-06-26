import React from 'react'
import {useState} from 'react'
import Chart from '../Chart'

const TimeframeSelector = () => {
  const [inDays, setInDays] = useState('daily')

  const onSelectDaily = () => {
    setInDays('daily')
  }

  const onSelectWeekly = () => {
    setInDays('weekly')
  }

  const onSelectMonthly = () => {
    setInDays('monthly')
  }

  return (
    <div>
      <button onClick={onSelectDaily}>Daily</button>
      <button onClick={onSelectWeekly}>Weekly</button>
      <button onClick={onSelectMonthly}>Monthly</button>
      <Chart typeDays={inDays} />
    </div>
  )
}

export default TimeframeSelector

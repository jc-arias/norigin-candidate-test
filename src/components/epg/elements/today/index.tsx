import React from 'react'
import './index.css'
import { getTodayDateFormatted } from '../../utils/todayDateFormatted'

const EpgTodayDate: React.FC = () => {
  return <div className={'epg-today-date'}>{getTodayDateFormatted()}</div>
}

export default EpgTodayDate

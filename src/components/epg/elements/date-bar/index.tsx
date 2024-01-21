import React from 'react'
import { formatTimestamp } from '../../utils/formatTimestamp'
import { constants } from '../../utils/constants'
import './index.css'

interface EpgDateBarProps {
  hours: Date[]
}

const EpgDateBar: React.FC<EpgDateBarProps> = ({ hours }) => {
  return (
    <div className={'epg-date-bar'}>
      <div className={'epg-date-today'}>21 January, 2024</div>
      <div className={'epg-date-bar-scrollable'}>
        {hours.map((item: Date, index: number) => {
          return (
            <div
              key={`date-bar-item-${index}`}
              className={'date-bar-item'}
              style={{
                width: `${
                  constants.MINUTES_IN_AN_HOUR * constants.PIXELS_PER_MINUTE
                }px`
              }}
            >
              {formatTimestamp(item)}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EpgDateBar

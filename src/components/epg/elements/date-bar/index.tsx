import React, { CSSProperties } from 'react'
import { formatTimestamp } from '../../utils/formatTimestamp'
import { constants } from '../../utils/constants'
import './index.css'
import EpgTimeTracker from '../time-tracker'

interface EpgDateBarProps {
  hours: Date[]
  horizontalStyle: CSSProperties
  howManyChannels: number
}

const EpgDateBar: React.FC<EpgDateBarProps> = ({
  hours,
  horizontalStyle,
  howManyChannels
}) => {
  return (
    <div className={'epg-date-bar'} style={horizontalStyle}>
      <EpgTimeTracker howManyChannels={howManyChannels} />
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

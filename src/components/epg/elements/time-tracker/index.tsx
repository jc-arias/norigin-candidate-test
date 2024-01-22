import React, { CSSProperties, useEffect, useState } from 'react'
import './index.css'
import { constants } from '../../utils/constants'
import { getTimeTrackerPosition } from '../../utils/timeTrackerPosition'

interface EpgTimeTrackerProps {
  howManyChannels: number
}

const EpgTimeTracker: React.FC<EpgTimeTrackerProps> = ({ howManyChannels }) => {
  const [style, setStyle] = useState<CSSProperties>()
  useEffect(() => {
    const updateStyle = () => {
      setStyle({
        height: `${howManyChannels * constants.ROW_HEIGHT}px`,
        marginLeft: getTimeTrackerPosition()
      })
    }
    updateStyle()
    const interval = setInterval(
      updateStyle,
      constants.MILLISECONDS_IN_A_SECOND * constants.SECONDS_IN_A_MINUTE
    )
    return () => clearInterval(interval)
  }, [])
  return <div className={'epg-time-tracker'} style={style} />
}

export default EpgTimeTracker

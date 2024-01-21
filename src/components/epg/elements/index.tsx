import React, { useEffect } from 'react'
import EpgDateBar from './date-bar'
import EpgRow from './row'

interface EpgComponentProps {
  channels: Channel[]
  hours: Date[]
  onFocusSelf: Function
}

const EpgComponent: React.FC<EpgComponentProps> = ({
  channels,
  hours,
  onFocusSelf
}) => {
  useEffect(() => {
    onFocusSelf()
  }, [])

  return (
    <div>
      <EpgDateBar hours={hours} />
      <div>
        {channels.map((channel: Channel, index: number) => {
          return <EpgRow channel={channel} index={index} />
        })}
      </div>
    </div>
  )
}

export default EpgComponent

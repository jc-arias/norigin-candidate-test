import React from 'react'
import ChannelItem from './channel-item'
import ScheduleItem from './schedule-item'
import './index.css'

interface EpgRowProps {
  channel: Channel
  index: number
}

const EpgRow: React.FC<EpgRowProps> = ({ channel, index }) => {
  const { id, title, images, schedules } = channel
  return (
    <div style={{ display: 'inline-flex' }}>
      <ChannelItem id={id} title={title} icon={images.logo} index={index} />
      <div className={'schedule-row'}>
        {schedules.map((item: Schedule, idx: number) => {
          return <ScheduleItem item={item} channel={title} idx={idx} />
        })}
      </div>
    </div>
  )
}

export default EpgRow

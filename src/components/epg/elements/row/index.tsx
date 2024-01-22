import React, { CSSProperties } from 'react'
import ChannelItem from './channel-item'
import ScheduleItem from './schedule-item'
import './index.css'

interface EpgRowProps {
  channel: Channel
  rowIndex: number
  onFocusRow: Function
  onFocusItem: Function
  horizontalStyle: CSSProperties
  onSetFocus: Function
}

const EpgRow: React.FC<EpgRowProps> = ({
  channel,
  rowIndex,
  onFocusRow,
  onFocusItem,
  horizontalStyle,
  onSetFocus
}) => {
  const { id, title, images, schedules } = channel
  return (
    <div style={{ display: 'inline-flex' }}>
      <ChannelItem id={id} title={title} icon={images.logo} index={rowIndex} />
      <div className={'schedule-row'} style={horizontalStyle}>
        {schedules.map((item: Schedule, itemIdx: number) => {
          return (
            <ScheduleItem
              key={`${title}-schedule-item-number-${itemIdx}`}
              focusId={`${title}-schedule-item-number-${itemIdx}`}
              item={item}
              channel={title}
              rowIndex={rowIndex}
              itemIndex={itemIdx}
              onFocusRow={onFocusRow}
              onFocusItem={onFocusItem}
              onSetFirstFocus={onSetFocus}
            />
          )
        })}
      </div>
    </div>
  )
}

export default EpgRow

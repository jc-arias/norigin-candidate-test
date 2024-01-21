import React, { useMemo } from 'react'
import InteractiveElement from '../../../../../elements/list-items'
import { formatTimestamp } from '../../../utils/formatTimestamp'
import { getWidth } from '../../../utils/getWidth'
import './index.css'

interface ScheduleItemProps {
  item: Schedule
  channel: string
  rowIndex: number
  itemIndex: number
  onFocusRow: Function
  onFocusItem: Function
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({
  item,
  channel,
  rowIndex,
  itemIndex,
  onFocusRow,
  onFocusItem
}) => {
  const { title, start, end } = item

  const width = useMemo(() => {
    return getWidth(start, end)
  }, [item])

  const runningTime = useMemo(() => {
    return {
      start: formatTimestamp(start),
      end: formatTimestamp(end)
    }
  }, [item])

  const isLive = useMemo(() => {
    const now: Date = new Date()
    const start: Date = new Date(item.start)
    const end: Date = new Date(item.end)

    return end > now && now > start
  }, [item])

  return (
    <InteractiveElement
      className={`schedule-item ${isLive ? 'live' : ''}`}
      focusedClassName={isLive ? 'live-focused' : 'schedule-item-focused'}
      onClick={() => console.log('onClick', item)}
      style={{ width }}
      focusKey={`${channel}-schedule-item-number-${itemIndex}`}
      onFocus={() => {
        onFocusRow(rowIndex)
        onFocusItem(itemIndex)
      }}
    >
      <h1 className={'schedule-title'}>{title}</h1>
      <h2 className={'schedule-duration'}>
        {`${runningTime.start} - ${runningTime.end}`}
      </h2>
    </InteractiveElement>
  )
}

export default ScheduleItem

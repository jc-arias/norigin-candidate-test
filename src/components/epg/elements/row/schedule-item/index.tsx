import React, { useMemo } from 'react'
import InteractiveElement from '../../../../../elements/list-items'
import { formatTimestamp } from '../../../utils/formatTimestamp'
import { getWidth } from '../../../utils/getWidth'
import './index.css'

interface ScheduleItemProps {
  item: Schedule
  channel: string
  idx: number
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ item, channel, idx }) => {
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

  return (
    <InteractiveElement
      className={'schedule-item'}
      focusedClassName={'schedule-item-focused'}
      onClick={() => console.log('onClick', item)}
      style={{ width }}
      focusKey={`${channel}-schedule-item-number-${idx}`}
    >
      <h1 className={'schedule-title'}>{title}</h1>
      <h2 className={'schedule-duration'}>
        {`${runningTime.start} - ${runningTime.end}`}
      </h2>
    </InteractiveElement>
  )
}

export default ScheduleItem

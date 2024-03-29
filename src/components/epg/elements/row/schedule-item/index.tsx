import React, { useCallback, useEffect, useMemo, useState } from 'react'
import InteractiveElement from '../../../../../elements/list-items'
import { formatTimestamp } from '../../../utils/formatTimestamp'
import { getWidth } from '../../../utils/getWidth'
import { constants } from '../../../utils/constants'
import './index.css'

interface ScheduleItemProps {
  item: Schedule
  channel: string
  rowIndex: number
  itemIndex: number
  onFocusRow: Function
  onFocusItem: Function
  focusId: string
  onSetFirstFocus: Function
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({
  item,
  channel,
  rowIndex,
  itemIndex,
  onFocusRow,
  onFocusItem,
  focusId,
  onSetFirstFocus
}) => {
  const { title, start, end } = item

  const checkIfIsLive = useCallback(() => {
    if (item) {
      const now: Date = new Date()
      const start: Date = new Date(item.start)
      const end: Date = new Date(item.end)

      return end > now && now > start
    }
    return false
  }, [item])

  const [isLive, setIsLive] = useState<boolean>(checkIfIsLive())

  const width = useMemo(() => {
    return getWidth(start, end)
  }, [item])

  const runningTime = useMemo(() => {
    return {
      start: formatTimestamp(start),
      end: formatTimestamp(end)
    }
  }, [item])

  useEffect(() => {
    if (rowIndex === 0 && isLive) {
      onSetFirstFocus(focusId)
    }

    const intervalId = setInterval(() => {
      setIsLive(checkIfIsLive())
    }, constants.MILLISECONDS_IN_A_SECOND * constants.SECONDS_IN_A_MINUTE)

    return () => clearInterval(intervalId)
  }, [])

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

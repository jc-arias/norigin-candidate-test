import React, { CSSProperties, useCallback, useEffect, useState } from 'react'
import EpgDateBar from './date-bar'
import EpgRow from './row'
import EpgBanner from './row/banner'
import EpgTodayDate from './today'
import { animateHorizontal, animateVertical } from '../utils/animations'
import { constants } from '../utils/constants'
import { getCurrentTimeframeIndex } from '../utils/currentTimeframe'

interface EpgComponentProps {
  channels: Channel[]
  hours: Date[]
  onSetFocus: Function
  timeframes: Array<Timeframe>
}

const EpgComponent: React.FC<EpgComponentProps> = ({
  channels,
  hours,
  onSetFocus,
  timeframes
}) => {
  const [verticalIndex, setVerticalIndex] = useState<number>(0)
  const [horizontalIndex, setHorizontalIndex] = useState<number>(0)
  const [timeframeIndex, setTimeframeIndex] = useState<number>(
    getCurrentTimeframeIndex(timeframes)
  )

  const [verticalStyle, setVerticalStyle] = useState<CSSProperties>({})
  const [horizontalStyle, setHorizontalStyle] = useState<CSSProperties>({})

  const calculateVerticalScroll = useCallback(() => {
    if (verticalIndex >= constants.VERTICAL_SCROLL_PIVOT) {
      setVerticalStyle(
        animateVertical(
          constants.ROW_HEIGHT,
          verticalIndex - constants.VERTICAL_SCROLL_PIVOT
        )
      )
    }
  }, [verticalIndex])

  useEffect(() => {
    calculateVerticalScroll()
  }, [verticalIndex])

  useEffect(() => {
    calculateHorizontalScroll()
  }, [horizontalIndex])

  const calculateHorizontalScroll = useCallback(() => {
    const item = channels[verticalIndex].schedules[horizontalIndex]
    const itemStartDate: Date = new Date(item.start)
    const itemEndDate: Date = new Date(item.end)
    let aux: number
    if (itemStartDate > timeframes[timeframeIndex].end) {
      aux = timeframeIndex + 1
      setTimeframeIndex(aux)
      setHorizontalStyle(
        animateHorizontal(constants.HORIZONTAL_VIEWPORT_SCROLL, aux)
      )
    } else if (itemEndDate < timeframes[timeframeIndex].start) {
      aux = timeframeIndex - 1
      setTimeframeIndex(aux)
      setHorizontalStyle(
        animateHorizontal(constants.HORIZONTAL_VIEWPORT_SCROLL, aux)
      )
    }
  }, [channels, timeframes, verticalIndex, horizontalIndex])

  return (
    <>
      <EpgBanner />
      <EpgTodayDate />
      <EpgDateBar
        howManyChannels={channels.length}
        hours={hours}
        horizontalStyle={horizontalStyle}
      />
      <div style={verticalStyle}>
        {channels.map((channel: Channel, index: number) => {
          return (
            <EpgRow
              key={`epg-row-${index}`}
              channel={channel}
              rowIndex={index}
              onFocusRow={setVerticalIndex}
              onFocusItem={setHorizontalIndex}
              horizontalStyle={horizontalStyle}
              onSetFocus={onSetFocus}
            />
          )
        })}
      </div>
    </>
  )
}

export default EpgComponent

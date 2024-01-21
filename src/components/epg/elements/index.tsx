import React, { useCallback, useEffect, useState } from 'react'
import EpgDateBar from './date-bar'
import EpgRow from './row'
import EpgBanner from './row/banner'
import { animateHorizontal, animateVertical } from '../utils/animations'
import { constants } from '../utils/constants'

interface EpgComponentProps {
  channels: Channel[]
  hours: Date[]
  onFocusSelf: Function
  timeframes: Array<{ start: Date; end: Date }>
}

const EpgComponent: React.FC<EpgComponentProps> = ({
  channels,
  hours,
  onFocusSelf,
  timeframes
}) => {
  useEffect(() => {
    onFocusSelf()
  }, [])

  const [verticalIndex, setVerticalIndex] = useState<number>(0)
  const [horizontalIndex, setHorizontalIndex] = useState<number>(0)
  const [timeframeIndex, setTimeframeIndex] = useState<number>(0)

  const [verticalStyle, setVerticalStyle] = useState<any>()
  const [horizontalStyle, setHorizontalStyle] = useState<any>()

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

  useEffect(() => {
    calculateHorizontalScroll()
  }, [horizontalIndex])

  return (
    <>
      <EpgBanner />
      <EpgDateBar hours={hours} horizontalStyle={horizontalStyle} />
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
            />
          )
        })}
      </div>
    </>
  )
}

export default EpgComponent

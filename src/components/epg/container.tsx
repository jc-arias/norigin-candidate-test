import React, { useEffect, useMemo, useState } from 'react'
import {
  FocusContext,
  useFocusable
} from '@noriginmedia/norigin-spatial-navigation'
import getEpg from '../../services/epg'
import EpgComponent from './elements'
import { getDailyTimestamps } from './utils/timestamps'
import { getDailyTimeframes } from './utils/dailyTimeframes'
import './index.css'

const EpgContainer: React.FC = () => {
  const { ref, focusKey, setFocus } = useFocusable({
    focusKey: 'EPG_CONTAINER'
  })

  const [data, setData] = useState<EpgResponse>()
  const hours = useMemo(() => {
    return getDailyTimestamps()
  }, [])
  const timeframes = useMemo(() => {
    return getDailyTimeframes()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp: EpgResponse = await getEpg()
        setData(resp)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className={'epg-container'}>
        {data?.channels ? (
          <EpgComponent
            channels={data.channels}
            hours={hours}
            timeframes={timeframes}
            onSetFocus={setFocus}
          />
        ) : (
          <></>
        )}
      </div>
    </FocusContext.Provider>
  )
}

export default EpgContainer

import React, { useEffect, useMemo, useState } from 'react'
import getEpg from '../../services/epg'
import {
  FocusContext,
  useFocusable
} from '@noriginmedia/norigin-spatial-navigation'
import './index.css'
import { getDailyTimestamps } from './utils/timestamps'
import EpgComponent from './elements'

const EpgContainer: React.FC = () => {
  const { ref, focusKey, focusSelf } = useFocusable({
    focusKey: 'EPG_CONTAINER'
  })

  const [data, setData] = useState<EpgResponse>()
  const hours = useMemo(() => {
    return getDailyTimestamps()
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
            onFocusSelf={focusSelf}
          />
        ) : (
          <></>
        )}
      </div>
    </FocusContext.Provider>
  )
}

export default EpgContainer

import React, { useEffect } from 'react'
import EpgContainer from './epg/container'
import {
  init as initSpatialNavigation,
  useFocusable,
  FocusContext
} from '@noriginmedia/norigin-spatial-navigation'

const Root: React.FC = () => {
  const { ref, focusKey } = useFocusable({
    focusKey: 'ROOT',
    autoRestoreFocus: false
  })

  useEffect(() => {
    initSpatialNavigation()
  }, [])

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref}>
        <EpgContainer />
      </div>
    </FocusContext.Provider>
  )
}

export default Root

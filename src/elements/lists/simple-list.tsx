import {
  useFocusable,
  FocusContext,
  FocusHandler
} from '@noriginmedia/norigin-spatial-navigation'
import React, { ReactNode, useEffect } from 'react'

interface SimpleListProps {
  children: ReactNode
  firstFocus?: string
  parentClassName?: string
  childrenClassName?: string
  keyToFocus: string
  onFocus: FocusHandler
}

const SimpleList: React.FC<SimpleListProps> = ({
  children,
  firstFocus,
  parentClassName,
  childrenClassName,
  keyToFocus,
  onFocus
}) => {
  const { ref, setFocus, focusKey, focusSelf } = useFocusable({
    focusKey: keyToFocus,
    onFocus
  })

  useEffect(() => {
    if (firstFocus) {
      setFocus(firstFocus)
      return
    }

    focusSelf()
  }, [])

  return (
    <FocusContext.Provider value={focusKey}>
      <ul
        ref={ref}
        className={parentClassName || ''}
        style={{ listStyleType: 'none' }}
      >
        {React.Children.map(children, (child) => (
          <li className={childrenClassName || ''}>{child}</li>
        ))}
      </ul>
    </FocusContext.Provider>
  )
}

export default SimpleList

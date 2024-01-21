import React, { CSSProperties, ReactNode } from 'react'
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation'

interface InteractiveElementProps {
  children: ReactNode
  className: string
  focusedClassName: string
  onClick: Function
  focusKey?: string
  onFocus?: Function
  onBlur?: Function
  style?: CSSProperties
}

const InteractiveElement: React.FC<InteractiveElementProps> = ({
  children,
  className,
  focusedClassName,
  onClick,
  focusKey,
  onFocus,
  onBlur,
  style = {}
}) => {
  const { ref, focused } = useFocusable({
    focusKey: focusKey || 'INTERACTIVE_ELEMENT',
    onEnterPress: () => onClick(),
    onFocus: () => {
      onFocus && onFocus()
    },
    onBlur: () => {
      onBlur && onBlur()
    }
  })

  return (
    <div
      ref={ref}
      className={`${className ? className : ''} ${
        focused ? focusedClassName : ''
      }`}
      onClick={() => onClick()}
      style={style}
    >
      {children}
    </div>
  )
}

export default InteractiveElement

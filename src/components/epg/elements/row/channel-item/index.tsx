import React from 'react'
import './index.css'
// @ts-ignore
import fallback from '../../../../../assets/channel-icon-fallback.png'

interface ChannelItemProps {
  id: string
  title: string
  icon: string
  index: number
}

const ChannelItem: React.FC<ChannelItemProps> = ({
  id,
  title,
  icon,
  index
}) => {
  return (
    <>
      <div className={'channel-item'}>
        <div style={{ display: 'inline-block' }}>
          <img
            className={'channel-icon'}
            src={icon}
            onError={(e: any) => {
              e.target.onerror = null
              e.target.src = fallback
            }}
          />
          <h1>{title}</h1>
        </div>
      </div>
    </>
  )
}

export default ChannelItem

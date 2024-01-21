import { constants } from './constants'

const TIME = constants.SCROLL_TIME

const animateVertical = (height: number, index: number): Object => {
  height = -height * index
  return {
    transition: `transform ${TIME}s`,
    WebkitTransition: `-webkit-transform ${TIME}s`,
    transform: `translateY(${height}px)`,
    WebkitTransform: `translateY(${height}px)`
  }
}

const animateHorizontal = (width: number, index: number): Object => {
  width = -width * index
  return {
    transition: `transform ${TIME}s`,
    WebkitTransition: `-webkit-transform ${TIME}s`,
    transform: `translateX(${width}px)`,
    WebkitTransform: `translateX(${width}px)`
  }
}

export { animateVertical, animateHorizontal }

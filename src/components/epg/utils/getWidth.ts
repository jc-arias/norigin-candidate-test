import { constants } from './constants'

export const getWidth = (start: Date, end: Date) => {
  const startToDate: Date = new Date(start)
  const endToDate: Date = new Date(end)

  const duration: number =
    (endToDate.getTime() - startToDate.getTime()) /
    (constants.MILLISECONDS_IN_A_SECOND * constants.MINUTES_IN_AN_HOUR)

  return `${duration * constants.PIXELS_PER_MINUTE}px`
}

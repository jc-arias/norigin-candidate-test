import { constants } from './constants'

export const getTimeTrackerPosition = (): string => {
  const now: Date = new Date()

  const midnight: Date = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    0,
    0,
    0
  )

  const difference: number = Math.floor(
    (now.getTime() - midnight.getTime()) /
      (constants.MILLISECONDS_IN_A_SECOND * constants.SECONDS_IN_A_MINUTE)
  )

  return `${difference * constants.PIXELS_PER_MINUTE}px`
}

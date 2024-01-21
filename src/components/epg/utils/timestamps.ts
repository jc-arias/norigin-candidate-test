import { constants } from './constants'

export const getDailyTimestamps = () => {
  const today = new Date()

  today.setMinutes(0)
  today.setSeconds(0)
  today.setMilliseconds(0)

  let hours = []

  for (let i = 0; i < constants.HOURS_IN_A_DAY; i++) {
    hours.push(new Date(today.setHours(i)))
  }

  return hours
}

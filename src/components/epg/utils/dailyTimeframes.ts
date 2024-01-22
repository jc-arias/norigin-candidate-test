import { constants } from './constants'

export const getDailyTimeframes = () => {
  const timeframes = []
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  for (
    let i = 0;
    i <= constants.HOURS_IN_A_DAY / constants.HOURS_IN_A_TIMEFRAME;
    i++
  ) {
    timeframes.push(
      new Date(
        today.getTime() +
          i *
            constants.HOURS_IN_A_TIMEFRAME *
            constants.MINUTES_IN_AN_HOUR *
            constants.SECONDS_IN_A_MINUTE *
            constants.MILLISECONDS_IN_A_SECOND
      )
    )
  }

  const parsedTimeframes = []
  for (let j = 0; j < timeframes.length; j++) {
    parsedTimeframes.push({ start: timeframes[j], end: timeframes[j + 1] })
  }

  return parsedTimeframes
}

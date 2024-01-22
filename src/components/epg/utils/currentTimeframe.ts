export const getCurrentTimeframeIndex = (
  timeframes: Array<Timeframe>
): number => {
  const now = new Date()

  for (let i = 0; i < timeframes.length; i++) {
    const { start, end } = timeframes[i]

    if (end > now && now > start) return i
  }

  return 0
}

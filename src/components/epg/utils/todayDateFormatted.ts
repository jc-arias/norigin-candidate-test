export const getTodayDateFormatted = (): string => {
  const timeSettings: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }

  return new Date().toLocaleDateString('en-US', timeSettings)
}

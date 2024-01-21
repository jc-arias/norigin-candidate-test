export const formatTimestamp = (timestamp: Date) => {
  const timestampToDate: Date = new Date(timestamp)
  let hh = ('0' + timestampToDate.getHours()).slice(-2)
  let mm = ('0' + timestampToDate.getMinutes()).slice(-2)

  return `${hh}:${mm}`
}

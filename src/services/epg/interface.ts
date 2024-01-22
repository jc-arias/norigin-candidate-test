interface Schedule {
  title: string
  id: string
  start: Date
  end: Date
}

interface Channel {
  id: string
  title: string
  images: {
    logo: string
  }
  schedules: Schedule[]
}

interface EpgResponse {
  channels: Channel[]
}

interface Timeframe {
  start: Date
  end: Date
}

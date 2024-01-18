interface Schedule {
  title: string
  id: string
  start: string
  end: string
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

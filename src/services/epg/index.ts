import Api from '../api'

export default async function getEpg(): Promise<EpgResponse> {
  const resp: EpgResponse = await Api.get('epg')
  return resp
}

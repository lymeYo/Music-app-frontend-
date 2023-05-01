import type { NextApiRequest, NextApiResponse } from 'next'

import { CITY_API_KEY } from '@/utils/constants'

type TResBody = {
  lat: number
  lon: number
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const query: string = req.body

    // const resBody: TResBody = { lat: +query.split(';')[1], lon: +query.split(';')[2] }
    const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Token ' + CITY_API_KEY
      },
      body: JSON.stringify({ resBody })
    }

    const cityRes = await fetch(url, options)
    const body = await cityRes.json()
    console.log('BODY HEREEEE: ', body, resBody)

    res.status(200).json(body)
  } catch (e) {
    res.status(400)
  }
}

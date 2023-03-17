import type { NextApiRequest, NextApiResponse } from 'next'

import { CITY_API_KEY } from '@/utils/constants'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const query = req.body
    console.log(query)
    const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Token ' + CITY_API_KEY
      },
      body: JSON.stringify({ query })
    }

    const cityRes = await fetch(url, options)
    const body = await cityRes.json()
    console.log(body.suggestions)
    // res.status(200).json({ mess: 'bodyyy' })
    res.status(200).json({ name: 'John Doe' })
  } catch (e) {
    res.status(400)
  }
}

import type { NextApiRequest, NextApiResponse } from 'next'

import { TPoster } from '@/redux/slices/poster'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const reqData = req.body
    let queryString = ''
    for (const [key, value] of Object.entries(JSON.parse(reqData))) {
      queryString += `${key}=${value}&`
    }

    const url = 'http://localhost:5000/poster?' + queryString
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }

    const myRes = await fetch(url, options)

    const postersData = await myRes.json()
    return res.status(myRes.status).send(postersData)
    // return res.status(200).send([])
  } catch (e) {
    console.warn(e)
    console.log('error here!')

    return res.status(400)
  }
}

import type { NextApiRequest, NextApiResponse } from 'next'

import { TPoster } from '@/redux/slices/poster'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query

    const url = `http://localhost:5000/poster/${id}`
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }

    const myRes = await fetch(url, options)
    if (!myRes.ok) {
      return res.status(500).send({ message: 'Записи с таким id не существует' })
    }

    const posterData = await myRes.json()
    return res.status(myRes.status).send(posterData)
  } catch (e) {
    console.warn(e)
    console.log('error here!')

    return res.status(400)
  }
}

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = req.body

    const url = 'http://localhost:5000/user/profile'
    const options = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    const myRes = await fetch(url, options)
    const data = await myRes.json()
    if (!myRes.ok) return res.status(myRes.status).send(data)

    return res.status(myRes.status).send(data)
  } catch (e) {
    console.warn(e)
    console.log('error here!')

    return res.status(400)
  }
}

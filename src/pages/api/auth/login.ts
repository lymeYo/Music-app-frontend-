import type { NextApiRequest, NextApiResponse } from 'next'

export type TerrorRequest = {
  message: string
}

export const isResponceError = (res, data): data is TerrorRequest => {
  return !res.ok
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const loginData = req.body

    const url = 'http://localhost:5000/auth/login'
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: loginData
    }

    const myRes = await fetch(url, options)
    const data = await myRes.json()

    return res.status(myRes.status).send(data)
  } catch (e) {
    console.warn(e)
    console.log('error here!')

    return res.status(400)
  }
}

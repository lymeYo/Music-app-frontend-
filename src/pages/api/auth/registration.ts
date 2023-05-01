import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const registerData = req.body

    const url = 'http://localhost:5000/auth/registration'
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: registerData
    }

    const myRes = await fetch(url, options)
    const data = await myRes.json()

    return res.status(myRes.status).send(data)
  } catch (e) {
    res.status(400)
  }
}

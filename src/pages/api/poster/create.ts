import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const reqData = req.body

    const url = 'http://localhost:5000/poster'
    const options = {
      method: 'POST',
      headers: {
        Authorization: req.headers.authorization as string,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: reqData
    }

    const myRes = await fetch(url, options)
    const data = await myRes.json()
    console.log(data)

    return res.status(myRes.status).send(data)
  } catch (e) {
    console.warn(e)
    console.log('error here!')

    return res.status(400)
  }
}

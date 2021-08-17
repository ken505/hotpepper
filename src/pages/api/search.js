import fetch from 'node-fetch'

// const defaultEndpoint = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&format=json&large_area=Z011`
// const defaultEndpoint = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&format=json&large_service_area=SS20`
const defaultEndpoint = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&format=json&large_area=Z023`

export default async (req, res) => {
  let url = defaultEndpoint

  if (typeof req.query.keyword !== undefined) {
    url = `${url}&keyword=${req.query.keyword}`
  }

  if (typeof req.query.start !== undefined) {
    url = `${url}&start=${req.query.start}`
  }

  url = encodeURI(url)
  // utf8 に置き換える？

  const result = await fetch(url)
  res.json(result.body)
}

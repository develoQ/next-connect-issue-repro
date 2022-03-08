import nextConnect from 'next-connect'

const handler = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` })
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method ${req.method} Not Allowed` })
  },
}).use((req, res, next) => {
  console.log(req.url)
  next()
})
export default handler

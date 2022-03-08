// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import handler from "./handler";

export default handler.get(function (req, res) {
  res.status(200).json({ name: 'hello2' })
})

export default function handler(req, res) {
  res.status(200).send(JSON.stringify({ message: "Send Email" }));
}

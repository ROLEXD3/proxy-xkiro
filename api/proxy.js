export default async function handler(req, res) {
  const response = await fetch("https://api.xkiro.com/v1/chat/completions", {
    method: 'POST',
    headers: {
      'Authorization': req.headers.authorization,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req.body)
  });
  const data = await response.json();
  res.status(200).json(data);
}

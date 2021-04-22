// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from "fs";

export default (req, res) => {
  const data = JSON.parse(fs.readFileSync('./server.json', 'utf8'));
  res.status(200).json(data);
}

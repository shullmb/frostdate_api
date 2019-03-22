import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: express.Application = express();
const port: number | string = process.env.PORT || 3001

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello FrostDate 2.0')
})

const server = app.listen(port, () => {
  console.log(`❄️ Serving up frost dates on ${port} 🔥`)
})


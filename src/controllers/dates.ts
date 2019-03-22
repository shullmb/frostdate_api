import express, { Router } from 'express';
import zipcodes from 'zipcodes';

const router: express.Router = Router();

interface ProbabilityInterface {
  p50: string,
  p60: string,
  p70: string,
  p80: string,
  p90: string,
}

interface DateInterface {
  hardFreeze: ProbabilityInterface,
  freeze: ProbabilityInterface,
  frost: ProbabilityInterface,
}

interface DateLocationInterface {
  station: string,
  zipcode: string,
  location: string,
  firstDate: DateInterface,
  lastDate: DateInterface
}

// GET /api/v2/dates
router.get('/', (req: express.Request, res: express.Response) => {
  res.status(400).json({status: 400, message: "please provide a zipcode"})
})

// GET /api/v2/dates/:zip
router.get('/:zip', (req: express.Request, res: express.Response) => {
  const zips: zipcodes.ZipCode[] | string[] = zipcodes.radius(req.params.zip, 10, true)
  res.json(zips)
})

module.exports = router;
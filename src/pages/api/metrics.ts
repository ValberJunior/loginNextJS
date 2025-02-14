import { NextApiRequest, NextApiResponse } from 'next';
import client from 'prom-client';

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', client.register.contentType);
  res.end(client.register.metrics());
}
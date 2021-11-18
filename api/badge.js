import { getSuccessCounter, nFormatter } from '../utils';

export default async (req, res) => {
  const success = await getSuccessCounter();

  res.setHeader('Cache-Control', 'max-age=86400');
  res.statusCode = 200;
  res.json({
    schemaVersion: 1,
    label: 'Handle Request',
    message: `${nFormatter(success.value, 2) || 0}`,
    color: 'green',
    cacheSeconds: 86400,
    style: 'flat-square',
  });
};

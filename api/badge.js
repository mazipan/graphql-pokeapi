import { getSuccessCounter, nFormatter } from '../utils';

export default async (req, res) => {
  const success = await getSuccessCounter();

  res.setHeader('Cache-Control', 'max-age=86400');
  res.statusCode = 200;
  res.json({
    schemaVersion: 1,
    label: 'Total Request',
    message: `${nFormatter(success.value, 2) || 0}`,
    color: 'brightgreen',
    cacheSeconds: 86400,
  });
};

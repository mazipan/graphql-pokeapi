import express from 'express';
const router = express.Router();

// @ts-ignore
router.get('/', (req, res): void => {
  res.send({
    health: 'ok'
  });
});

export default router;

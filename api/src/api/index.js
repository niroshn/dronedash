import express from 'express';
import drone from './drone';
let router = express.Router();

router.use('/drone', drone);

export default router;

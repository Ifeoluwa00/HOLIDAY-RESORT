import { Router } from 'express';
import { auth } from '../controllers/auth';
const router = Router();

router.get('/', auth, (req, res) => {
  res.render('membership');
});

export default router;

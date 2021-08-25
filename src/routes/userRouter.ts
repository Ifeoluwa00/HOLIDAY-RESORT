import { Router, Request, Response } from 'express';
import {
  signup,
  forgotPassword,
  resetPassword,
} from '../controllers/authController';
import { getAllUsers } from '../controllers/userController';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const mess = req.query.message;
  res.render('register', {
    message: mess,
  });
});

router.post('/', signup);
router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);
router.get('/', getAllUsers);

export default router;

import { Router } from 'express';
import { places } from '../src/utils/places';

const router = Router();
interface Use {
  [key: string]: number | string;
}

router.get('/', (req, res) => {
  //
  const { key, location } = req.query;
  // if (!key) return res.status(404).send('please enter search type');
  // if (!location) return res.status(404).send('Please enter an address');
  const find = key as string || '';
  const place = location as string || '';
  places(place, find, (error: string | undefined, data: undefined | Use[]) => {
    if (error) {
      return res.send({ error });
    }
    res.render('index', {data: data || [], key, location});
  });
});

router.get('/payment', (req, res) => {
  res.render('cart')
})

export = router;
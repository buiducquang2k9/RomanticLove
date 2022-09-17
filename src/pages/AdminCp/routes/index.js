// Pages

import AddPost from '../pages/AddPost';
import ChangePass from '../pages/ChangePass';
import HomeAdmin from '../pages/Home';

// Routes
const puplicRouter = [
  { path: '/', component: HomeAdmin },
  { path: '/them-bai-viet', component: AddPost },
  { path: '/thay-doi-mat-khau', component: ChangePass },
];

export { puplicRouter };

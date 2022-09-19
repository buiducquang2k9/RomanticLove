// Pages
import About from '~/pages/About';
import AlbumAnhCuoi from '~/pages/AlbumAnhCuoi';
import AnhTreCon from '~/pages/AnhTreCon';
import Posts from '~/pages/Posts';
import Home from '~/pages/Home';
import Quote from '~/pages/Quote';
import TrapAnHoi from '~/pages/TrapAnHoi';
import AnhDaNgoai from '~/pages/Album/AnhDaNgoai';
import AnhPhong from '~/pages/Album/AnhPhong';
import AdminCp from '~/pages/AdminCp';
// Public routes
const publicRoutes = [
  { path: '*/', component: Home },
  { path: '*/about', component: About, layout: 'OnlyHeaderFooter' },
  { path: '*/quote', component: Quote, layout: 'OnlyHeaderFooter' },
  { path: '*/posts', component: Posts, layout: 'OnlyHeaderFooter' },
  { path: '*/dich-vu/anh-tre-con', component: AnhTreCon, layout: 'OnlyHeaderFooter' },
  { path: '*/dich-vu/trap-an-hoi', component: TrapAnHoi, layout: 'OnlyHeaderFooter' },
  { path: '*/dich-vu/album-anh-cuoi', component: AlbumAnhCuoi, layout: 'OnlyHeaderFooter' },
  { path: '*/album/anh-da-ngoai', component: AnhDaNgoai, layout: 'OnlyHeaderFooter' },
  { path: '*/album/anh-phong', component: AnhPhong, layout: 'OnlyHeaderFooter' },
  { path: '*/admin/*', component: AdminCp, layout: 'Null' },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };

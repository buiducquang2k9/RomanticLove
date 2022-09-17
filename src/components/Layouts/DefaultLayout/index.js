import styles from '~/components/Layouts/Layout.module.scss';
import classNames from 'classnames/bind';

import Header from '~/components/Layouts/components/Header';
import Footer from '~/components/Layouts/components/Footer';
import Banner from '~/components/Layouts/components/Banner';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={cx('container')}>
      <Header />
      <Banner />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;

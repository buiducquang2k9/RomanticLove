import styles from '~/components/Layouts/Layout.module.scss';
import classNames from 'classnames/bind';

import Header from '~/components/Layouts/components/Header';
import Footer from '~/components/Layouts/components/Footer';

const cx = classNames.bind(styles);
function OnlyHeaderFooter({ children }) {
  return (
    <div className={cx('container')}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default OnlyHeaderFooter;

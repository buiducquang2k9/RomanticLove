import styles from './AlbumAnhCuoi.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function AlbumAnhCuoi() {
  document.title = 'Album Ảnh Cưới Đẹp';
  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('heading')}>Album Ảnh Cưới Đẹp</h2>
      <div className={cx('album-list')}>
        <div className={cx('album-item')}>
          <div className={cx('img')}>
            <img
              src="https://tuart.net/wp-content/uploads/2022/07/293570741_5389628051095781_5329142456531791562_n.jpg"
              alt=""
            />
          </div>
          <div className={cx('title')}>
            <Link to="/">Album ảnh cưới đẹp Cần Thơ</Link>
          </div>
        </div>
        <div className={cx('album-item')}>
          <div className={cx('img')}>
            <img
              src="https://tuart.net/wp-content/uploads/2022/07/293570741_5389628051095781_5329142456531791562_n.jpg"
              alt=""
            />
          </div>
          <div className={cx('title')}>
            <Link to="/">Album ảnh cưới đẹp Cần Thơ</Link>
          </div>
        </div>
        <div className={cx('album-item')}>
          <div className={cx('img')}>
            <img
              src="https://tuart.net/wp-content/uploads/2022/07/293570741_5389628051095781_5329142456531791562_n.jpg"
              alt=""
            />
          </div>
          <div className={cx('title')}>
            <Link to="/">Album ảnh cưới đẹp Cần Thơ</Link>
          </div>
        </div>
        <div className={cx('album-item')}>
          <div className={cx('img')}>
            <img
              src="https://tuart.net/wp-content/uploads/2022/07/293570741_5389628051095781_5329142456531791562_n.jpg"
              alt=""
            />
          </div>
          <div className={cx('title')}>
            <Link to="/">Album ảnh cưới đẹp Cần Thơ</Link>
          </div>
        </div>
        <div className={cx('album-item')}>
          <div className={cx('img')}>
            <img
              src="https://tuart.net/wp-content/uploads/2022/07/293570741_5389628051095781_5329142456531791562_n.jpg"
              alt=""
            />
          </div>
          <div className={cx('title')}>
            <Link to="/">Album ảnh cưới đẹp Cần Thơ</Link>
          </div>
        </div>
        <div className={cx('album-item')}>
          <div className={cx('img')}>
            <img
              src="https://tuart.net/wp-content/uploads/2022/07/293570741_5389628051095781_5329142456531791562_n.jpg"
              alt=""
            />
          </div>
          <div className={cx('title')}>
            <Link to="/">Album ảnh cưới đẹp Cần Thơ</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumAnhCuoi;

import classNames from 'classnames/bind';
import styles from './DaNgoai.module.scss';

const cx = classNames.bind(styles);
function AnhDaNgoai() {
  document.title = 'Album Ảnh Dã Ngoại';
  return (
    <div className={cx('container')}>
      <div className={cx('container2')}>
        <div className={cx('heading')}>Album Chụp Dã Ngoại</div>
        <div className={cx('wrapper')}>
          <div className={cx('img')}>
            <img alt="" src="https://recmiennam.com/wp-content/uploads/2018/07/hinh-nen-den-thui.jpg" />
          </div>
          <div className={cx('img')}>
            <img alt="" src="https://recmiennam.com/wp-content/uploads/2018/07/hinh-nen-den-thui.jpg" />
          </div>
          <div className={cx('img')}>
            <img alt="" src="https://recmiennam.com/wp-content/uploads/2018/07/hinh-nen-den-thui.jpg" />
          </div>
          <div className={cx('img')}>
            <img alt="" src="https://recmiennam.com/wp-content/uploads/2018/07/hinh-nen-den-thui.jpg" />
          </div>
          <div className={cx('img')}>
            <img alt="" src="https://recmiennam.com/wp-content/uploads/2018/07/hinh-nen-den-thui.jpg" />
          </div>
          <div className={cx('img')}>
            <img alt="" src="https://recmiennam.com/wp-content/uploads/2018/07/hinh-nen-den-thui.jpg" />
          </div>
          <div className={cx('img')}>
            <img alt="" src="https://recmiennam.com/wp-content/uploads/2018/07/hinh-nen-den-thui.jpg" />
          </div>
          <div className={cx('img')}>
            <img alt="" src="https://recmiennam.com/wp-content/uploads/2018/07/hinh-nen-den-thui.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnhDaNgoai;

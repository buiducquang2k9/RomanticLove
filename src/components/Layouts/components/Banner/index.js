import styles from './Banner.module.scss';
import classNames from 'classnames/bind';
import BannerImage from './../../../../assets/images/Banner.jpg';

const cx = classNames.bind(styles);
function Banner() {
  return (
    <div className={cx('wrapper')}>
      <img alt="Banner" src={BannerImage}></img>
    </div>
  );
}

export default Banner;

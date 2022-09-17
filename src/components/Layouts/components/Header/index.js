import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Header() {
  const [windowY, setWindowY] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 0) {
      setWindowY(true);
    } else if (position === 0) {
      setWindowY(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  const handleClickSwitchPage = () => {
    window.scroll(0, 0);
  };
  return (
    <div className={cx('wrapper', windowY ? 'over' : '')}>
      <div className={cx('container')}>
        <div className={cx('logo-title', windowY ? 'over' : '')}>Áo cưới Romantic Love</div>
        <nav className={cx('menu')}>
          <div className={cx('menu-link', windowY ? 'over' : '', 'menu-hover')}>
            <Link to="/" onClick={handleClickSwitchPage}>
              Trang chủ
            </Link>
          </div>
          <div className={cx('menu-link', windowY ? 'over' : '', 'menu-drop')}>
            <Link to="" onClick={handleClickSwitchPage}>
              Dịch vụ
            </Link>
            <div className={cx('drop-down')}>
              <div className={cx('menu-link', windowY ? 'over' : '')}>
                <Link to="/album/anh-phong" onClick={handleClickSwitchPage}>
                  Ảnh cưới chụp phòng
                </Link>
              </div>
              <div className={cx('menu-link', windowY ? 'over' : '')}>
                <Link to="/album/anh-da-ngoai" onClick={handleClickSwitchPage}>
                  Ảnh cưới chụp dã ngoại
                </Link>
              </div>
              <div className={cx('menu-link', windowY ? 'over' : '')}>
                <Link to="/dich-vu/anh-tre-con" onClick={handleClickSwitchPage}>
                  Ảnh trẻ con
                </Link>
              </div>
              <div className={cx('menu-link', windowY ? 'over' : '')}>
                <Link to="/dich-vu/trap-an-hoi" onClick={handleClickSwitchPage}>
                  Tráp ăn hỏi
                </Link>
              </div>
              <div className={cx('menu-link', windowY ? 'over' : '')}>
                <Link to="/dich-vu/album-anh-cuoi" onClick={handleClickSwitchPage}>
                  Album ảnh cưới đẹp
                </Link>
              </div>
            </div>
          </div>
          <div className={cx('menu-link', windowY ? 'over' : '', 'menu-hover')}>
            <Link to="/quote" onClick={handleClickSwitchPage}>
              Báo giá
            </Link>
          </div>
          <div className={cx('menu-link', windowY ? 'over' : '', 'menu-hover')}>
            <Link to="/about" onClick={handleClickSwitchPage}>
              Giới thiệu
            </Link>
          </div>
          <div className={cx('menu-link', windowY ? 'over' : '', 'menu-hover')}>
            <Link to="/posts" onClick={handleClickSwitchPage}>
              Bài viết
            </Link>
          </div>
          <div className={cx('menu-link-icon', windowY ? 'over' : '')}>
            <a href="mailto:cameraquangdai1982@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
          <div className={cx('menu-link-icon', windowY ? 'over' : '')}>
            <a href="tel:0984776485">
              <FontAwesomeIcon icon={faPhone} />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;

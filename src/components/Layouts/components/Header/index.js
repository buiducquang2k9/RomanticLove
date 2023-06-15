import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBars, faClose, faPhone } from '@fortawesome/free-solid-svg-icons';

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
    setToggle(false);
    window.scroll(0, 0);
  };
  const [toggle, setToggle] = useState(false);
  const [dropToggle, setDropToggle] = useState(false);
  return (
    <div className={cx('wrapper', windowY ? 'over' : '')}>
      <div className={cx('container')}>
        <div className={cx('logo-title', windowY ? 'over' : '')}>
          <Link to="/">Áo cưới Romantic Love</Link>
        </div>
        <nav className={cx('menu')}>
          <div className={cx('menu-link', windowY ? 'over' : '', 'menu-hover')} onClick={handleClickSwitchPage}>
            <Link to="/" onClick={handleClickSwitchPage}>
              Trang chủ
            </Link>
          </div>
          <div className={cx('menu-link', windowY ? 'over' : '', 'menu-drop')}>
            <Link to="">Dịch vụ</Link>
            <div className={cx('drop-down')}>
              <div className={cx('menu-link', windowY ? 'over' : '')} onClick={handleClickSwitchPage}>
                <Link to="/dich-vu/quote" onClick={handleClickSwitchPage}>
                  Báo giá ảnh cưới
                </Link>
              </div>
              <div className={cx('menu-link', windowY ? 'over' : '')} onClick={handleClickSwitchPage}>
                <Link to="/dich-vu/anh-tre-con" onClick={handleClickSwitchPage}>
                  Ảnh trẻ con
                </Link>
              </div>
              <div className={cx('menu-link', windowY ? 'over' : '')} onClick={handleClickSwitchPage}>
                <Link to="/dich-vu/trap-an-hoi" onClick={handleClickSwitchPage}>
                  Tráp ăn hỏi
                </Link>
              </div>
              <div className={cx('menu-link', windowY ? 'over' : '')} onClick={handleClickSwitchPage}>
                <Link to="/dich-vu/album-anh-cuoi" onClick={handleClickSwitchPage}>
                  Album ảnh cưới đẹp
                </Link>
              </div>
            </div>
          </div>
          <div className={cx('menu-link', windowY ? 'over' : '', 'menu-hover')} onClick={handleClickSwitchPage}>
            <Link to="/about" onClick={handleClickSwitchPage}>
              Giới thiệu
            </Link>
          </div>
          <div className={cx('menu-link', windowY ? 'over' : '', 'menu-hover')} onClick={handleClickSwitchPage}>
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
        <nav className={cx('menuToggle')}>
          <div className={cx('toggleIcon')}>
            {toggle ? (
              <FontAwesomeIcon icon={faClose} onClick={() => setToggle(!toggle)} className={cx('icontoggle')} />
            ) : (
              <FontAwesomeIcon icon={faBars} onClick={() => setToggle(!toggle)} className={cx('icontoggle')} />
            )}
          </div>
          <div className={cx('itemMenuToggle', !toggle ? 'hidden' : '', windowY ? 'overToggle' : '')}>
            <div className={cx('menu-link', windowY ? 'over' : '', 'menu-hover')} onClick={handleClickSwitchPage}>
              <Link to="/" onClick={handleClickSwitchPage}>
                Trang chủ
              </Link>
            </div>
            <div
              className={cx('menu-link', windowY ? 'over' : '', 'menu-drop')}
              onClick={() => setDropToggle(!dropToggle)}
            >
              <Link to="">
                Dịch vụ{' '}
                {!dropToggle ? (
                  <span>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                  </span>
                ) : (
                  <span>
                    <ion-icon name="chevron-up-outline"></ion-icon>
                  </span>
                )}
              </Link>
              <div className={cx('drop-down', !dropToggle ? '' : 'click')}>
                <div className={cx('linkMenu')}>
                  <div className={cx('menu-link', windowY ? 'over' : '')} onClick={handleClickSwitchPage}>
                    <Link to="/dich-vu/quote" onClick={handleClickSwitchPage}>
                      Báo giá chụp ảnh cưới
                    </Link>
                  </div>
                  <div className={cx('menu-link', windowY ? 'over' : '')} onClick={handleClickSwitchPage}>
                    <Link to="/dich-vu/anh-tre-con" onClick={handleClickSwitchPage}>
                      Ảnh trẻ con
                    </Link>
                  </div>
                  <div className={cx('menu-link', windowY ? 'over' : '')} onClick={handleClickSwitchPage}>
                    <Link to="/dich-vu/trap-an-hoi" onClick={handleClickSwitchPage}>
                      Tráp ăn hỏi
                    </Link>
                  </div>
                  <div className={cx('menu-link', windowY ? 'over' : '')} onClick={handleClickSwitchPage}>
                    <Link to="/dich-vu/album-anh-cuoi" onClick={handleClickSwitchPage}>
                      Album ảnh cưới đẹp
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx('menu-link', windowY ? 'over' : '', 'menu-hover')} onClick={handleClickSwitchPage}>
              <Link to="/about" onClick={handleClickSwitchPage}>
                Giới thiệu
              </Link>
            </div>
            <div className={cx('menu-link', windowY ? 'over' : '', 'menu-hover')} onClick={handleClickSwitchPage}>
              <Link to="/posts" onClick={handleClickSwitchPage}>
                Bài viết
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;

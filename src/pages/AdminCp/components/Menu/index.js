import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faEnvelopesBulk, faHome, faKey, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function MenuAdmin({ Logout }) {
  const routes = [
    {
      iconFont: faHome,
      linkHref: '/admin',
      titleHref: 'Home',
      color: '#f44336',
    },
    {
      iconFont: faEnvelopesBulk,
      linkHref: '/admin/them-bai-viet',
      titleHref: 'Thêm bài viết',
      color: '#2cccff',
    },
    {
      iconFont: faKey,
      linkHref: '/admin/thay-doi-mat-khau',
      titleHref: 'Thay đổi mật khẩu',
      color: '#0fc70f',
    },
  ];
  const [keyLink, setKeyLink] = useState(0);
  const [hideMenu, setHideMenu] = useState(true);
  return (
    <div className={cx('container', hideMenu ? '' : 'hover')}>
      <div className={cx('title-menu')}>
        {hideMenu ? (
          <></>
        ) : (
          <FontAwesomeIcon
            icon={faClose}
            onClick={() => setHideMenu(!hideMenu)}
            className={cx('content-menu-icon-title')}
          />
        )}
        {!hideMenu ? (
          <></>
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setHideMenu(!hideMenu)}
            className={cx('content-menu-icon-title')}
          />
        )}
      </div>
      <ul className={cx('content-menu')}>
        {routes.map((route, index) => {
          return (
            <li key={index} className={cx(keyLink === index ? 'onLink' : '')}>
              <Link to={route.linkHref} className={cx('link-icon')} onClick={() => setKeyLink(index)}>
                <FontAwesomeIcon
                  icon={route.iconFont}
                  onClick={() => setKeyLink(index)}
                  className={cx('content-menu-icon')}
                />
              </Link>
              <div className={cx('content-menu-link')}>
                <Link to={route.linkHref} onClick={() => setKeyLink(index)}>
                  {route.titleHref}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
      <FontAwesomeIcon icon={faRightFromBracket} className={cx('btn-logout-icon')} onClick={Logout} />
    </div>
  );
}

export default MenuAdmin;

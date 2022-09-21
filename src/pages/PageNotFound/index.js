import styles from './PageNotFound.module.scss';
import classNames from 'classnames/bind';
import React from 'react';
import FZFImg from './../../assets/images/404Img.jpg';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function PageNotFound() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('body-404')}>
        <div className={cx('content')}>
          <div>404</div>
          <div>Page Not Found</div>
          <Link to="/">Go to home</Link>
        </div>
        <div className={cx('img')}>
          <img src={FZFImg} alt="404" />
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;

import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { faLocationDot, faPhone, faEnvelope, faRoad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { Link } from 'react-router-dom';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);
function Footer() {
  return (
    <>
      <footer className={cx('wrapper')}>
        <div className={cx('footer-list')}>
          <div className={cx('footer-item', 'hightlight')}>
            <div className={cx('heading')}>Danh Mục Nổi Bật</div>
            <div className={cx('footer-link')}>
              <div className={cx('link')}>
                <Link to="/about">Giới thiệu</Link>
              </div>
              <div className={cx('link')}>
                <Link to="/quote">Báo giá khuyến mãi</Link>
              </div>
              <div className={cx('link')}>
                <Link to="/dich-vu/anh-tre-con">Ảnh trẻ con</Link>
              </div>
              <div className={cx('link')}>
                <Link to="/dich-vu/album-anh-cuoi">Album Romantic Love</Link>
              </div>
              <div className={cx('link')}>
                <Link to="/dich-vu/trap-an-hoi">Tráp ăn hỏi</Link>
              </div>
              <div className={cx('link')}>
                <Link to="/posts">Bài Viết</Link>
              </div>
            </div>
          </div>
          <div className={cx('footer-item', 'contact')}>
            <div className={cx('heading')}>Thông Tin Liên Hệ</div>
            <div className={cx('footer-link')}>
              <div className={cx('footer-contact-item')}>
                <FontAwesomeIcon icon={faLocationDot} />
                <div className={cx('footer-contact-item-content')}>
                  <h4>- Cơ Sở 1:</h4>
                  <h4>Tổ 14, TT.Xuân Trường, Xuân Trường, Nam Định</h4>
                </div>
              </div>
              <div className={cx('footer-contact-item')}>
                <FontAwesomeIcon icon={faLocationDot} />
                <div className={cx('footer-contact-item-content')}>
                  <h4>- Cơ Sở 2:</h4>
                  <h4>Cầu Cao, TT.Cát Thành, Trực Ninh, Nam Định</h4>
                </div>
              </div>
              <div className={cx('footer-contact-item')}>
                <FontAwesomeIcon icon={faPhone} />
                <div className={cx('footer-contact-item-content')}>
                  <h4>+84 984.776.485</h4>
                  <h4>+84 969.164.786</h4>
                </div>
              </div>
              <div className={cx('footer-contact-item')}>
                <FontAwesomeIcon icon={faEnvelope} />
                <div className={cx('footer-contact-item-content')}>
                  <h4>cameraquangdai1982@gmail.com</h4>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('footer-item', 'social')}>
            <div className={cx('heading')}>Mạng Xã Hội</div>
            <div className={cx('footer-link')}>
              <div className={cx('socialItem')}>
                <a href="https://www.facebook.com/AoCuoiRomanticLove">
                  <FontAwesomeIcon icon={faFacebook} className={cx('icon')} />
                  Facebook
                </a>
              </div>
              <div className={cx('socialItem')}>
                <a href="mailto:cameraquangdai1982@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} className={cx('icon')} />
                  Gmail
                </a>
              </div>
              <div className={cx('socialItem')}>
                <a href="https://www.google.com/maps/place/%C3%81o+C%C6%B0%E1%BB%9Bi+Romantic+Love/@20.2735901,106.3281565,17z/data=!4m12!1m6!3m5!1s0x3136086473059203:0x9453292c9cd5e61d!2zw4FvIEPGsOG7m2kgUm9tYW50aWMgTG92ZQ!8m2!3d20.2735851!4d106.3303452!3m4!1s0x3136086473059203:0x9453292c9cd5e61d!8m2!3d20.2735851!4d106.3303452?hl=vi-VN">
                  <FontAwesomeIcon icon={faRoad} className={cx('icon')} />
                  Google Map
                </a>
              </div>
              <div className={cx('socialItem')}>
                <a href="https://zalo.me/0984776485">
                  <FontAwesomeIcon icon={faMessage} className={cx('icon')} />
                  Zalo
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={cx('no-copy')}>Copyright © 2022 Romantic Love</div>
    </>
  );
}

export default Footer;

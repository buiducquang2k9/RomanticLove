import styles from './AlbumAnhCuoi.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import album1_1 from './../../assets/images/Album/Album1/album1 (1).jpg';
import album1_2 from './../../assets/images/Album/Album1/album1 (2).jpg';
import album1_3 from './../../assets/images/Album/Album1/album1 (3).jpg';
import album1_4 from './../../assets/images/Album/Album1/album1 (4).jpg';
import album1_5 from './../../assets/images/Album/Album1/album1 (5).jpg';
import album1_6 from './../../assets/images/Album/Album1/album1 (6).jpg';
import album1_7 from './../../assets/images/Album/Album1/album1 (7).jpg';
import album1_8 from './../../assets/images/Album/Album1/album1 (8).jpg';
import album1_9 from './../../assets/images/Album/Album1/album1 (9).jpg';
import album1_10 from './../../assets/images/Album/Album1/album1 (10).jpg';
import album1_11 from './../../assets/images/Album/Album1/album1 (11).jpg';
import album1_12 from './../../assets/images/Album/Album1/album1 (12).jpg';
import album1_13 from './../../assets/images/Album/Album1/album1 (13).jpg';
import album1_14 from './../../assets/images/Album/Album1/album1 (14).jpg';
import album1_15 from './../../assets/images/Album/Album1/album1 (15).jpg';
import album1_16 from './../../assets/images/Album/Album1/album1 (16).jpg';
import album1_17 from './../../assets/images/Album/Album1/album1 (17).jpg';
import album1_18 from './../../assets/images/Album/Album1/album1 (18).jpg';
import album1_19 from './../../assets/images/Album/Album1/album1 (19).jpg';
import album1_20 from './../../assets/images/Album/Album1/album1 (20).jpg';
import album2_1 from './../../assets/images/Album/Album2/album2 (1).jpg';
import album2_2 from './../../assets/images/Album/Album2/album2 (2).jpg';
import album2_3 from './../../assets/images/Album/Album2/album2 (3).jpg';
import album2_4 from './../../assets/images/Album/Album2/album2 (4).jpg';
import album2_5 from './../../assets/images/Album/Album2/album2 (5).jpg';
import album2_6 from './../../assets/images/Album/Album2/album2 (6).jpg';
import album2_7 from './../../assets/images/Album/Album2/album2 (7).jpg';
import album2_8 from './../../assets/images/Album/Album2/album2 (8).jpg';
import album2_9 from './../../assets/images/Album/Album2/album2 (9).jpg';
import album2_10 from './../../assets/images/Album/Album2/album2 (10).jpg';
import album2_11 from './../../assets/images/Album/Album2/album2 (11).jpg';
import album2_12 from './../../assets/images/Album/Album2/album2 (12).jpg';
import album2_13 from './../../assets/images/Album/Album2/album2 (13).jpg';
import album2_14 from './../../assets/images/Album/Album2/album2 (14).jpg';
import album2_15 from './../../assets/images/Album/Album2/album2 (15).jpg';
import album2_16 from './../../assets/images/Album/Album2/album2 (16).jpg';
import album2_17 from './../../assets/images/Album/Album2/album2 (17).jpg';
import album2_18 from './../../assets/images/Album/Album2/album2 (18).jpg';
import album2_19 from './../../assets/images/Album/Album2/album2 (19).jpg';
import album2_20 from './../../assets/images/Album/Album2/album2 (20).jpg';
import album3_1 from './../../assets/images/Album/Album3/album3 (1).jpg';
import album3_2 from './../../assets/images/Album/Album3/album3 (2).jpg';
import album3_3 from './../../assets/images/Album/Album3/album3 (3).jpg';
import album3_4 from './../../assets/images/Album/Album3/album3 (4).jpg';
import album3_5 from './../../assets/images/Album/Album3/album3 (5).jpg';
import album3_6 from './../../assets/images/Album/Album3/album3 (6).jpg';
import album3_7 from './../../assets/images/Album/Album3/album3 (7).jpg';
import album3_8 from './../../assets/images/Album/Album3/album3 (8).jpg';
import album3_9 from './../../assets/images/Album/Album3/album3 (9).jpg';
import album3_10 from './../../assets/images/Album/Album3/album3 (10).jpg';
import album3_11 from './../../assets/images/Album/Album3/album3 (11).jpg';
import album3_12 from './../../assets/images/Album/Album3/album3 (12).jpg';
import album3_13 from './../../assets/images/Album/Album3/album3 (13).jpg';
import album3_14 from './../../assets/images/Album/Album3/album3 (14).jpg';
import album3_15 from './../../assets/images/Album/Album3/album3 (15).jpg';
import album3_16 from './../../assets/images/Album/Album3/album3 (16).jpg';
import album3_17 from './../../assets/images/Album/Album3/album3 (17).jpg';
import album3_18 from './../../assets/images/Album/Album3/album3 (18).jpg';
import album3_19 from './../../assets/images/Album/Album3/album3 (19).jpg';
import album3_20 from './../../assets/images/Album/Album3/album3 (20).jpg';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AlbumAnhCuoi() {
  document.title = 'Album Ảnh Cưới Đẹp';
  const albumList = [
    {
      name: 'Album ảnh cưới đẹp Cần Thơ',
      album1: album1_1,
      album2: album1_2,
      album3: album1_3,
      album4: album1_4,
      album5: album1_5,
      album6: album1_6,
      album7: album1_7,
      album8: album1_8,
      album9: album1_9,
      album10: album1_10,
      album11: album1_11,
      album12: album1_12,
      album13: album1_13,
      album14: album1_14,
      album15: album1_15,
      album16: album1_16,
      album17: album1_17,
      album18: album1_18,
      album19: album1_19,
      album20: album1_20,
    },
    {
      name: 'Album ảnh cưới đẹp Nam Định',
      album1: album2_1,
      album2: album2_2,
      album3: album2_3,
      album4: album2_4,
      album5: album2_5,
      album6: album2_6,
      album7: album2_7,
      album8: album2_8,
      album9: album2_9,
      album10: album2_10,
      album11: album2_11,
      album12: album2_12,
      album13: album2_13,
      album14: album2_14,
      album15: album2_15,
      album16: album2_16,
      album17: album2_17,
      album18: album2_18,
      album19: album2_19,
      album20: album2_20,
    },
    {
      name: 'Album ảnh cưới đẹp Hà Nội',
      album1: album3_1,
      album2: album3_2,
      album3: album3_3,
      album4: album3_4,
      album5: album3_5,
      album6: album3_6,
      album7: album3_7,
      album8: album3_8,
      album9: album3_9,
      album10: album3_10,
      album11: album3_11,
      album12: album3_12,
      album13: album3_13,
      album14: album3_14,
      album15: album3_15,
      album16: album3_16,
      album17: album3_17,
      album18: album3_18,
      album19: album3_19,
      album20: album3_20,
    },
  ];
  const [keyImg, setKeyImg] = useState(-1);
  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('heading')}>Album Ảnh Cưới Đẹp</h2>
      <div className={cx('album-list')}>
        {albumList.map((albumItem, index) => {
          return (
            <>
              <div className={cx('album-item')} key={index} onClick={() => setKeyImg(index)}>
                <div className={cx('img')}>
                  <img src={albumItem.album1} alt={albumItem.name} />
                </div>
                <div className={cx('title')}>
                  <Link>{albumItem.name}</Link>
                </div>
              </div>
              {keyImg === index ? (
                <div className={cx('view-img')} key={index + 1}>
                  <div className={cx('view-img-content')}>
                    <div className="img-view">
                      <img alt={albumItem.name} src={albumItem.album1} />
                    </div>
                    <div className={cx('img-view')}>
                      <img alt={albumItem.name} src={albumItem.album2} />
                    </div>
                    <div className={cx('img-view')}>
                      <img alt={albumItem.name} src={albumItem.album3} />
                    </div>
                    <div className={cx('img-view')}>
                      <img alt={albumItem.name} src={albumItem.album4} />
                    </div>
                    <div className={cx('img-view')}>
                      <img alt={albumItem.name} src={albumItem.album5} />
                    </div>
                    <div className={cx('img-view')}>
                      <img alt={albumItem.name} src={albumItem.album6} />
                    </div>
                    <div className={cx('img-view')}>
                      <img alt={albumItem.name} src={albumItem.album7} />
                    </div>
                    <div className={cx('img-view')}>
                      <img alt={albumItem.name} src={albumItem.album8} />
                    </div>
                    <div className={cx('img-view')}>
                      <img alt={albumItem.name} src={albumItem.album9} />
                    </div>
                    <div className={cx('img-view')}>
                      <img alt={albumItem.name} src={albumItem.album10} />
                    </div>
                    <div className={cx('img-view')}>
                      <img alt={albumItem.name} src={albumItem.album11} />
                    </div>
                    <div className={cx('img-view')}>
                      <img alt={albumItem.name} src={albumItem.album12} />
                    </div>
                    <div className={cx('img-view')}>
                      <img alt={albumItem.name} src={albumItem.album13} />
                    </div>
                    <div className={cx('img-view')}>
                      <img alt={albumItem.name} src={albumItem.album14} />
                    </div>
                    <div className={cx('img-view')}>
                      <img alt={albumItem.name} src={albumItem.album15} />
                    </div>
                    <div className={cx('img-view')}>
                      <img alt={albumItem.name} src={albumItem.album16} />
                    </div>
                    <div className={cx('img-view')}>
                      <img alt={albumItem.name} src={albumItem.album17} />
                    </div>
                    <div className={cx('img-view')}>
                      <img alt={albumItem.name} src={albumItem.album18} />
                    </div>
                    <div className={cx('img-view')}>
                      <img alt={albumItem.name} src={albumItem.album19} />
                    </div>
                    <div className={cx('img-view')}>
                      <img alt={albumItem.name} src={albumItem.album20} />
                    </div>
                    <div className={cx('btn')} onClick={() => setKeyImg(-1)}>
                      <FontAwesomeIcon icon={faClose} />
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default AlbumAnhCuoi;

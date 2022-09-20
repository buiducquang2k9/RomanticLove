import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import LogoTongQuan from './../../assets/images/TongQuanLogo.jpg';
import AlbumTongQuan from './../../assets/images/TongQuanAlbum.jpg';

const cx = classNames.bind(styles);
function Home() {
  document.title = 'Áo cưới Romantic Love';
  const handleClickSwitchPage = () => {
    window.scroll(0, 0);
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container', 'mainBack')}>
        <div className={cx('tongQuan')}>
          <h1>Tổng quan về Romantic Love</h1>
          <div className={cx('tongQuan-list')}>
            <div className={cx('tongQuan-item')}>
              <Link to="/about" onClick={handleClickSwitchPage}>
                <img src={LogoTongQuan} alt="" />
                Giới Thiệu
              </Link>
            </div>
            <div className={cx('tongQuan-item')}>
              <Link to="/dich-vu/album-anh-cuoi" onClick={handleClickSwitchPage}>
                <img src={AlbumTongQuan} alt="" />
                Album Ảnh Cưới
              </Link>
            </div>
            <div className={cx('tongQuan-item')}>
              <a href="https://www.facebook.com/AoCuoiRomanticLove">
                <img src="https://anhvienmimosa.com/wp-content/uploads/2017/03/fanpage.png" alt="" />
                Fanpage Facebook
              </a>
            </div>
            <div className={cx('tongQuan-item')}>
              <a href="youtube.com/channel/UCFCfdQwxMtLbVLdpAZZ8PzQ">
                <img src="https://anhvienmimosa.com/wp-content/uploads/2021/11/youtube.png" alt="" />
                Romantic Love Wedding
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('container')}>
        <div className={cx('fullDis')}>
          <div className={cx('collection')}>
            <h1>Bộ sưu tập</h1>
            <div className={cx('collection-list')}>
              <div className={cx('collection-item')}>
                <a href="https://youtube.com">
                  <img src="https://anhvienmimosa.com/wp-content/uploads/2022/01/anh-cuoi-dep-2000x2000.jpg" alt="" />
                  Ảnh Cưới Đẹp
                </a>
              </div>
              <div className={cx('collection-item')}>
                <a href="https://youtube.com">
                  <img src="https://anhvienmimosa.com/wp-content/uploads/2022/01/makeup-2000x2000.jpg" alt="" />
                  Dịch Vụ Tráp Ăn Hỏi
                </a>
              </div>
              <div className={cx('collection-item')}>
                <a href="https://youtube.com">
                  <img src="https://anhvienmimosa.com/wp-content/uploads/2022/01/vay-cuoi-2000x2000.jpg" alt="" />
                  Váy Cưới Cao Cấp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('container')}>
        <div className={cx('fullDis', 'fullContent')}>
          <div className={cx('baoGia')}>
            <div className={cx('content')}>
              <h1>Báo Giá Dịch Vụ</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum
              </p>
              <button className={cx('button')}>Xem Ngay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

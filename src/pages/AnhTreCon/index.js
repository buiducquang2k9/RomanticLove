import styles from './AnhTreCon.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function AnhTreCon() {
  document.title = 'Ảnh trẻ con';
  return (
    <div className={cx('wrapper')}>
      <div className={cx('heading')}>BẢNG GIÁ CHỤP ẢNH CHO BÉ</div>
      <div className={cx('title')}>
        Dưới đây là Bảng giá chụp ảnh cho bé cực cạnh tranh, quý khách quan tâm lựa chọn gói Chụp ảnh cho bé phù hợp
        nhất!
      </div>
      <div className={cx('title')}>♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥</div>
      <div className={cx('name')}>Gói Mầm I: 580.000 VND</div>
      <div className={cx('info')}>
        ♥ Gồm 1 ảnh 30 x 45 Gỗ cao cấp <br /> <br /> ♥ 5 ảnh chỉnh sửa cực chất
        <br />
        <br /> ♥ Tặng phiếu giảm giá 10% cho lần chụp sau ( Gia đình có thể chụp cùng bé ) <br />
        <br />♥ Được coppy file chỉnh sửa và file resize của toàn bộ file gốc <br />
        <br /> Khách hàng chụp ngoại cảnh và tại nhà + 250k
      </div>
      <div className={cx('img')}>
        <img src="https://tuarts.net/wp-content/uploads/2018/03/chup-anh-cho-be-1-2.jpg" alt="" />
      </div>
      <div className={cx('name')}>Gói Mầm II: 1.050.000 VND</div>
      <div className={cx('info')}>
        ♥ Gồm 10 ảnh 13 x 18 phủ UV (chống mốc, chống bay màu) <br /> <br />
        ♥ 1 ảnh 40 x 60 Gỗ cao cấp <br />
        <br />
        ♥ 1 ảnh 20 x 30 Gỗ sang trọng
        <br />
        <br />
        ♥ Tặng phiếu giảm giá 10% cho lần chụp sau
        <br />
        <br />
        ♥ Được coppy file chỉnh sửa & toàn bộ file gốc
        <br />
        <br />
        Khách hàng chụp tại nhà hoặc ngoại cảnh + 250k
      </div>
      <div className={cx('img')}>
        <img src="https://tuarts.net/wp-content/uploads/2018/03/chup-anh-cho-be-11-2.jpg" alt="" />
      </div>
      <div className={cx('img')}>
        <img
          src="https://tuarts.net/wp-content/uploads/2015/03/20626985_1695507207139913_4640374565409984170_o.jpg"
          alt=""
        />
      </div>
      <div className={cx('name')}>Gói Chồi : 1.990.000 VND</div>
      <div className={cx('info')}>
        ♥ 1 Album 15 x 21 - 10 tờ (20 trang) <br />
        <br />
        ♥ 1 ảnh 35 x 50 ép gỗ
        <br />
        <br />
        ♥ Tặng phiếu giảm giá 15% cho lần chụp sau
        <br />
        <br />
        ♥ Được coppy toàn bộ file gốc và file chỉnh sửa
        <br />
        <br />
      </div>
      <div className={cx('img')}>
        <img src="https://tuarts.net/wp-content/uploads/2018/03/chup-anh-cho-be-5.jpg" alt="" />
      </div>
      <div className={cx('name')}>Gói Lá : 2.590.000 VND</div>
      <div className={cx('info')}>
        ♥ 1 Album 20 x 30 - 10 tờ (20 trang) <br /> <br />
        ♥ 1 ảnh 50 x 75 ép gỗ
        <br />
        <br />
        ♥ Tặng phiếu giảm giá 15% cho lần chụp sau
        <br />
        <br />
        ♥ Được coppy toàn bộ file gốc và file chỉnh sửa
        <br />
        <br />
      </div>
      <div className={cx('img')}>
        <img src="http://roses.vn/product_images/uploaded_images/_mg_3785.jpg" alt="" />
      </div>
      <div className={cx('name')}>Gói ROMANTIC LOVE VIP: 3.850.000 VND</div>
      <div className={cx('info')}>
        ♥ 1 Album 30 x 45 - 10 tờ (20 trang) <br />
        <br />
        ♥ 1 ảnh 60 x 90 ép gỗ
        <br />
        <br />
        ♥ 1 ảnh 20 x 30 phủ UV công nghệ mới
        <br />
        <br />
        ♥ Tặng phiếu giảm giá 15% cho lần chụp sau
        <br />
        <br />
        ♥ Được coppy toàn bộ file gốc và file chỉnh sửa
        <br />
        <br />
      </div>
      <div className={cx('img')}>
        <img src="https://tuarts.net/wp-content/uploads/2018/03/chup-anh-cho-be-12.jpg" alt="" />
      </div>
      <hr />
      <hr />
      <div className={cx('heading')}>Tham Khảo Ảnh Mẫu</div>
      <div className={cx('img-list')}>
        <div className={cx('img-item')}>
          <img src="https://tuarts.net/wp-content/uploads/2018/03/chup-anh-new-born-1-1.jpg" alt="Lỗi" />
        </div>
        <div className={cx('img-item')}>
          <img src="https://tuarts.net/wp-content/uploads/2018/03/chup-anh-new-born-2-1.jpg" alt="Lỗi" />
        </div>
        <div className={cx('img-item')}>
          <img src="https://tuarts.net/wp-content/uploads/2018/03/chup-anh-new-born-6-1.jpg" alt="Lỗi" />
        </div>
        <div className={cx('img-item')}>
          <img src="https://tuarts.net/wp-content/uploads/2018/03/chup-anh-new-born-7-1.jpg" alt="Lỗi" />
        </div>
        <div className={cx('img-item')}>
          <img src="https://tuarts.net/wp-content/uploads/2018/03/chup-anh-new-born-8-1.jpg" alt="Lỗi" />
        </div>
        <div className={cx('img-item')}>
          <img src="https://tuarts.net/wp-content/uploads/2018/03/chup-anh-new-born-9-1.jpg" alt="Lỗi" />
        </div>
        <div className={cx('img-item')}>
          <img src="https://tuarts.net/wp-content/uploads/2018/03/chup-anh-new-born-20.jpg" alt="Lỗi" />
        </div>
        <div className={cx('img-item')}>
          <img src="https://tuarts.net/wp-content/uploads/2018/03/chup-anh-new-born-10-1.jpg" alt="Lỗi" />
        </div>
        <div className={cx('img-item')}>
          <img src="https://tuarts.net/wp-content/uploads/2018/03/chup-anh-new-born-16.jpg" alt="Lỗi" />
        </div>
        <div className={cx('img-item')}>
          <img src="https://tuarts.net/wp-content/uploads/2018/03/chup-anh-new-born-12.jpg" alt="Lỗi" />
        </div>
        <div className={cx('img-item')}>
          <img src="https://tuarts.net/wp-content/uploads/2018/03/chup-anh-new-born-22.jpg" alt="Lỗi" />
        </div>
      </div>
    </div>
  );
}

export default AnhTreCon;

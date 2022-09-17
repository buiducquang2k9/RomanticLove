import styles from './TrapAnHoi.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function TrapAnHoi() {
  document.title = 'Tráp ăn hỏi';
  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        Cưới hỏi 1987 là đơn vị dẫn đầu trong lĩnh vực cung cấp dịch vụ nhận đặt tráp ăn hỏi đẹp, cao cấp nhất tại Hà
        Nội hiện nay. Với đội ngũ làm tráp ăn hỏi giàu kinh nghiệm luôn mang đến cho khách hàng những mẫu tráp ăn hỏi
        đẹp nhất với các lễ vật được lựa chọn từ các thương hiệu uy tín nhất. <br />
        Dịch vụ đặt tráp ăn hỏi trọn gói tại cưới hỏi trọn gói 1987 ngày càng nhận được những đánh giá cao của khách
        hàng về cả chất lượng dịch vụ tốt, chuyên nghiệp lẫn các mẫu tráp đẹp. Đặc biệt, dịch vụ đặt tráp ăn hỏi trọn
        gói tại nhà giúp tiếp kiệm thời gian, tiền bạc tốt nhất cho các khách hàng. <br />
        Việc của khách hàng là vô cùng đơn giản, bạn chỉ cần chọn mẫu tráp ăn hỏi và làm hợp đồng thuê tráp với chúng
        tôi, còn lại tất cả công việc còn lại hãy để chúng tôi lo. Đến đúng ngày ăn hỏi gia đình bạn sẽ có mâm tráp ăn
        hỏi đẹp ưng ý nhất mà bạn không cần phải bận tâm suy nghĩ.
        <br />
        Thông tin liên hệ :<br />
        CS1: Nam Định, TT.Xuân Trường, Tổ 14
        <br />
        CS2: Nam Định, Trực Ninh, TT.Cát Thành, Cầu Cao
        <br />
        Điện thoại: 098.477.6485 – 096.916.4786
        <br />
        Email: cameraquangdai1982@gmail.com
      </div>
      <div className={cx('list')}>
        <Link to="/" className={cx('item')}>
          <img src="https://image.bnews.vn/MediaUpload/Org/2020/12/04/an-hoi-8.jpg" alt="" />
          <div className={cx('item-title')}>
            <div className={cx('heading')}>Tráp Dạm Ngõ</div>
            <div className={cx('title')}>
              Báo Giá Chi Tiết Tráp Dạm Ngõ – Những Điều Cần Biết Trong Việc Tổ Chức Lễ Dạm Ngõ
            </div>
          </div>
        </Link>
        <Link to="/" className={cx('item')}>
          <img src="https://image.bnews.vn/MediaUpload/Org/2020/12/04/an-hoi-8.jpg" alt="" />
          <div className={cx('item-title')}>
            <div className={cx('heading')}>Báo Giá Lễ Ăn Hỏi 5 Tráp</div>
            <div className={cx('title')}>CƯỚI HỎI TRỌN GÓI 1987 – DỊCH VỤ CƯỚI HỎI TRỌN GÓI CHUYÊN NGHIỆP A-Z</div>
          </div>
        </Link>
        <Link to="/" className={cx('item')}>
          <img src="https://image.bnews.vn/MediaUpload/Org/2020/12/04/an-hoi-8.jpg" alt="" />
          <div className={cx('item-title')}>
            <div className={cx('heading')}>Báo Giá Lễ Ăn Hỏi 7 Tráp</div>
            <div className={cx('title')}>BÁO GIÁ BỘ LỄ ĂN HỎI 7 TRÁP HOA LỤA</div>
          </div>
        </Link>
        <Link to="/" className={cx('item')}>
          <img src="https://image.bnews.vn/MediaUpload/Org/2020/12/04/an-hoi-8.jpg" alt="" />
          <div className={cx('item-title')}>
            <div className={cx('heading')}>Báo Giá Lễ Ăn Hỏi 9 Tráp</div>
            <div className={cx('title')}>BÁO GIÁ BỘ LỄ ĂN HỎI 9 TRÁP TRANG TRÍ HOA LỤA</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default TrapAnHoi;

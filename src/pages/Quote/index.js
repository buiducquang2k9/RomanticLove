import styles from './Quote.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Quote() {
  document.title = 'Báo giá - Romantic Love';
  return (
    <div className={cx('wrapper')}>
      <div className={cx('heading')}>Báo giá chụp ảnh cưới 2023</div>
      <div className={cx('container')}>
        <div className={cx('heading-container')}>Báo giá khuyến mại</div>
        <div className={cx('quote-content')}>
          <h1 className={cx('heading-content')}>A. GÓI CHỤP HÌNH CƯỚI PHIM TRƯỜNG</h1>
          {/* start Item */}
          <h1 className={cx('title')}>1. GÓI CHỤP PHÒNG TẠI ÁO CƯỚI ROMANTIC LOVE : 3.900.000đ</h1>
          <img
            className={cx('image')}
            src="https://ahihistudio.vn/wp-content/uploads/2020/08/a.jpg"
            alt="Romantic Love"
          />
          <h3 className={cx('title-item')}>Sản Phẩm Trọn Gói Nhận Được Bao Gồm:</h3>
          <ul className={cx('list-item')}>
            <li className={cx('item')}>
              Trang Phục Chụp Ảnh Cô Dâu -Chú Rể:
              <ul className={cx('list-item')}>
                <li className={cx('item')}>Cô Dâu: 3 Váy Cưới cao cấp +1 áo dài truyền thống+1 bộ áo đôi Trung Quốc</li>
                <li className={cx('item')}>
                  Chú Rể : 3 bộ vest cao cấp + 1 áo dài truyền thống+1 bộ áo đôi Trung Quốc
                </li>
              </ul>
            </li>
            <li className={cx('item')}>Khuyến mại trang đểm cô dâu 2 ngày cưới + ăn hỏi</li>
            <li className={cx('item')}>Miễn Phí trang phục cô dâu+chú rể 2 buổi cưới và ăn hỏi</li>
            <li className={cx('item')}>2 Ảnh Phóng lớn Chất Liệu Tráng Gương Cao Cấp 60x90</li>
            <li className={cx('item')}>1 Ảnh Hàn Quốc Để Bàn 20x30</li>
            <li className={cx('item')}>1 Bộ Khung Hàn Quốc treo Tường : 9 ảnh</li>
            <li className={cx('item')}>1 USB trình Chiếu Slideshow ảnh </li>
            <li className={cx('item')}>Trả toàn bộ file gốc đã chỉnh sửa</li>
          </ul>
          {/* end Item */}

          {/* start Item */}
          <h1 className={cx('title')}>2. GÓI CHỤP PHIM TRƯỜNG TRỌN GÓI TẠI NAM ĐỊNH: 5.900.000đ</h1>
          <img
            className={cx('image')}
            src="https://ahihistudio.vn/wp-content/uploads/2020/08/a.jpg"
            alt="Romantic Love"
          />
          <h3 className={cx('title-item')}>Sản Phẩm Trọn Gói Nhận Được Bao Gồm:</h3>
          <ul className={cx('list-item')}>
            <li className={cx('item')}>
              Trang Phục Chụp Ảnh Cô Dâu -Chú Rể:Trang điểm và làm tóc tùy theo từng trang phục:
              <ul className={cx('list-item')}>
                <li className={cx('item')}>
                  Cô Dâu: 4 váy cưới cao cấp + 1 áo dài truyền thống + 1 bộ áo đôi Trung Quốc + 1 bộ đồ tự do{' '}
                </li>
                <li className={cx('item')}>
                  Chú Rể: 4 bộ vest cao cấp + 1 áo dài truyền thống + 1 bộ áo đôi Trung Quốc + 1 bộ đồ tự do
                </li>
              </ul>
            </li>
            <li className={cx('item')}> Miễn Phí vé vào Phim Trường chụp ảnh + Chi phí đi lại bằng ô tô </li>
            <li className={cx('item')}> Khuyến mại trang đểm cô dâu 2 ngày cưới + ăn hỏi </li>
            <li className={cx('item')}> 2 Ảnh Phóng lớn Chất Liệu Tráng Gương Cao Cấp 60x90 </li>
            <li className={cx('item')}> 1 Ảnh Hàn Quốc Để Bàn 20x30 </li>
            <li className={cx('item')}> 1 Bộ Khung Hàn Quốc Treo Tường : 11 ảnh </li>
            <li className={cx('item')}> 1 USB trình Chiếu Slideshow ảnh </li>
            <li className={cx('item')}> Trả toàn bộ file gốc đã chỉnh sửa </li>
          </ul>
          {/* end Item */}

          {/* start Item */}
          <h1 className={cx('title')}>3. GÓI CHỤP PHIM TRƯỜNG TRỌN GÓI TẠI THÁI BÌNH: 5.900.000 đ</h1>
          <img
            className={cx('image')}
            src="https://ahihistudio.vn/wp-content/uploads/2020/08/a.jpg"
            alt="Romantic Love"
          />
          <h3 className={cx('title-item')}>Sản Phẩm Trọn Gói Nhận Được Bao Gồm:</h3>
          <ul className={cx('list-item')}>
            <li className={cx('item')}>
              Trang Phục Chụp Ảnh Cô Dâu -Chú Rể:Trang điểm và làm tóc tùy theo từng trang phục:
              <ul className={cx('list-item')}>
                <li className={cx('item')}>
                  Cô Dâu: 4 Váy Cưới cao cấp +1 áo dài truyền thống+1 bộ áo đôi Trung Quốc+1 bộ đồ tự do
                </li>
                <li className={cx('item')}>
                  Chú Rể : 4 bộ vest cao cấp + 1 áo dài truyền thống+1 bộ áo đôi Trung Quốc+1 bộ đồ tự do
                </li>
              </ul>
            </li>
            <li className={cx('item')}>Miễn Phí vé vào Phim Trường chụp ảnh + Chi phí đi lại bằng ô tô</li>
            <li className={cx('item')}>Miễn Phí trang phục cô dâu+chú rể 2 buổi cưới và ăn hỏi</li>
            <li className={cx('item')}>Khuyến mại trang đểm cô dâu 2 ngày cưới + ăn hỏi</li>
            <li className={cx('item')}>2 Ảnh Phóng lớn Chất Liệu Tráng Gương Cao Cấp 60x90</li>
            <li className={cx('item')}>1 Ảnh Hàn Quốc Để Bàn 20x30</li>
            <li className={cx('item')}>1 Bộ Khung Hàn Quốc treo Tường : 11 ảnh</li>
            <li className={cx('item')}>1 USB trình Chiếu Slideshow ảnh </li>
            <li className={cx('item')}>Trả toàn bộ file gốc đã chỉnh sửa</li>
          </ul>
          {/* end Item */}

          {/* start Item */}
          <h1 className={cx('title')}>4. GÓI CHỤP PHIM TRƯỜNG TRỌN GÓI TẠI NINH BÌNH: 7.500.000 đ</h1>
          <img
            className={cx('image')}
            src="https://ahihistudio.vn/wp-content/uploads/2020/08/a.jpg"
            alt="Romantic Love"
          />
          <h3 className={cx('title-item')}>Sản Phẩm Trọn Gói Nhận Được Bao Gồm:</h3>
          <ul className={cx('list-item')}>
            <li className={cx('item')}>
              Trang Phục Chụp Ảnh Cô Dâu -Chú Rể:Trang điểm và làm tóc tùy theo từng trang phục:
              <ul className={cx('list-item')}>
                <li className={cx('item')}>
                  Cô Dâu: 4 Váy Cưới cao cấp +1 áo dài truyền thống+1 bộ áo đôi Trung Quốc+1 bộ đồ tự do
                </li>
                <li className={cx('item')}>
                  Chú Rể : 4 bộ vest cao cấp + 1 áo dài truyền thống+1 bộ áo đôi Trung Quốc+1 bộ đồ tự do
                </li>
              </ul>
            </li>
            <li className={cx('item')}>Miễn Phí vé vào Phim Trường chụp ảnh + Chi phí đi lại bằng ô tô</li>
            <li className={cx('item')}>Miễn Phí trang phục cô dâu+chú rể 2 buổi cưới và ăn hỏi</li>
            <li className={cx('item')}>Khuyến mại trang đểm cô dâu 2 ngày cưới + ăn hỏi</li>
            <li className={cx('item')}>2 Ảnh Phóng lớn Chất Liệu Tráng Gương Cao Cấp 60x90</li>
            <li className={cx('item')}>1 Ảnh Hàn Quốc Để Bàn 20x30</li>
            <li className={cx('item')}>1 Bộ Khung Hàn Quốc treo Tường : 11 ảnh</li>
            <li className={cx('item')}>1 USB trình Chiếu Slideshow ảnh </li>
            <li className={cx('item')}>Trả toàn bộ file gốc đã chỉnh sửa</li>
          </ul>
          {/* end Item */}

          {/* start Item */}
          <h1 className={cx('title')}>5. GÓI CHỤP PHIM TRƯỜNG TRỌN GÓI TẠI THANH HÓA:8.500.000 đ</h1>
          <img
            className={cx('image')}
            src="https://ahihistudio.vn/wp-content/uploads/2020/08/a.jpg"
            alt="Romantic Love"
          />
          <h3 className={cx('title-item')}>Sản Phẩm Trọn Gói Nhận Được Bao Gồm:</h3>
          <ul className={cx('list-item')}>
            <li className={cx('item')}>
              Trang Phục Chụp Ảnh Cô Dâu -Chú Rể:Trang điểm và làm tóc tùy theo từng trang phục:
              <ul className={cx('list-item')}>
                <li className={cx('item')}>
                  Cô Dâu: 4 Váy Cưới cao cấp +1 áo dài truyền thống+1 bộ áo đôi Trung Quốc+1 bộ đồ tự do
                </li>
                <li className={cx('item')}>
                  Chú Rể : 4 bộ vest cao cấp + 1 áo dài truyền thống+1 bộ áo đôi Trung Quốc+1 bộ đồ tự do
                </li>
              </ul>
            </li>
            <li className={cx('item')}> Miễn Phí vé vào Phim Trường chụp ảnh + Chi phí đi lại bằng ô tô</li>
            <li className={cx('item')}> Miễn Phí trang phục cô dâu+chú rể 2 buổi cưới và ăn hỏi</li>
            <li className={cx('item')}> Khuyến mại trang đểm cô dâu 2 ngày cưới + ăn hỏi</li>
            <li className={cx('item')}> 2 Ảnh Phóng lớn Chất Liệu Tráng Gương Cao Cấp 60x90</li>
            <li className={cx('item')}> 1 Ảnh Hàn Quốc Để Bàn 20x30</li>
            <li className={cx('item')}> 1 Bộ Khung Hàn Quốc treo Tường : 11 ảnh</li>
            <li className={cx('item')}> 1 USB trình Chiếu Slideshow ảnh </li>
            <li className={cx('item')}> Trả toàn bộ file gốc đã chỉnh sửa</li>
          </ul>
          {/* end Item */}
        </div>
      </div>
    </div>
  );
}

export default Quote;

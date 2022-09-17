import styles from './About.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function About() {
  document.title = 'Giới thiệu - Romantic Love';
  return (
    <div className={cx('wrapper')}>
      <div className={cx('text')}>
        Nói đến ngành ảnh viện áo cưới Hà Nội, Mimosa Wedding được đánh giá là Studio chụp ảnh cưới chuyên nghiệp và
        đẳng cấp nhất. Với đội ngũ nhân viên tư vấn nhiệt tình, thân thiện cùng ê-kíp photographer, makeup, photoshop
        chuyên nghiệp đã và đang mang đến những bộ ảnh cưới đẹp, hoành tráng và đa dạng phong cách cho các cặp đôi khi
        lựa chọn đến với Mimosa Wedding.
      </div>
      <div className={cx('title')} style={{ color: 'red' }}>
        Xem video hậu trường tác nghiệp của Mimosa wedding
      </div>
      <div className={cx('img')}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HT-lmtNZpNE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={cx('title')} style={{ color: 'red' }}>
        Xem thêm album sản phẩm của Mimosa wedding
      </div>
      <div className={cx('img')}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CAaZ_ji9IrI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={cx('text')}>
        Cùng chiêm ngắm các sản phẩm tuyệt vời từ 100% khách hàng của Mimosa wedding nhé các bạn
      </div>
      <div className={cx('img')}>
        <img
          src="https://anhvienmimosa.com/wp-content/uploads/2021/03/163287702_1902241646583907_6134698860586538345_o.jpg"
          alt=""
        />
      </div>
      <div className={cx('img')}>
        <img
          src="https://anhvienmimosa.com/wp-content/uploads/2021/03/163283989_1902240316584040_6331808086084095652_n.jpg"
          alt=""
        />
      </div>
      <div className={cx('img')}>
        <img
          src="https://anhvienmimosa.com/wp-content/uploads/2021/03/163503661_1902241676583904_9201987038363712975_o.jpg"
          alt=""
        />
      </div>
      <div className={cx('img')}>
        <img
          src="https://anhvienmimosa.com/wp-content/uploads/2021/03/163285439_1902241723250566_7011294660832373028_o.jpg"
          alt=""
        />
      </div>
      <div className={cx('img')}>
        <img
          src="https://anhvienmimosa.com/wp-content/uploads/2021/03/163318847_1902240043250734_907052495399372959_n.jpg"
          alt=""
        />
      </div>
      <div className={cx('title')}>
        Với Mimosa chất lượng được chúng tôi đặt lên hàng đầu và sau đó là dịch vụ đi kèm
      </div>
      <div className={cx('img')}>
        <img
          src="https://anhvienmimosa.com/wp-content/uploads/2021/03/163612924_1902241563250582_5979273082445427384_o.jpg"
          alt=""
        />
      </div>
      <div className={cx('title')}>
        Bộ ảnh cưới của Á hậu Phương Nga và diễn viên Bình An được thực hiện bởi Mimosa wedding
      </div>
      <div className={cx('img')}>
        <img
          src="https://anhvienmimosa.com/wp-content/uploads/2021/03/163601735_1902241503250588_4771561677641929339_o.jpg"
          alt=""
        />
      </div>
      <div className={cx('title')}>Studio chụp ảnh cưới đẹp tại Hà Nội – Ảnh.Mimosa wedding</div>
      <div className={cx('img')}>
        <img
          src="https://anhvienmimosa.com/wp-content/uploads/2021/03/162817219_1902241429917262_5427527976349610294_o.jpg"
          alt=""
        />
      </div>
      <div className={cx('img')}>
        <img
          src="https://anhvienmimosa.com/wp-content/uploads/2021/03/164064190_1902240389917366_1748728608356822872_n-768x512.jpg"
          alt=""
        />
      </div>
      <div className={cx('heading')}>Mimosa Wedding ảnh cưới hàng đầu Việt Nam</div>
      <div className={cx('text')}>Bạn chuẩn bị lập gia đình? Bạn muốn có một cuốn album ảnh cưới đẹp và độc đáo?</div>
      <div className={cx('text')}>
        Bạn mong muốn khán giả trầm trồ thích thú khi chiêm ngưỡng cuốn album ảnh cưới của mình?
      </div>
      <div className={cx('text')}>
        Bạn cần một dịch vụ hoàn hảo, xứng đáng để đặt niềm tin tuyệt đối cho ngày quan trọng và ý nghĩa nhất của đời
        người?
      </div>
    </div>
  );
}

export default About;

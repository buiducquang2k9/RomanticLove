import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);
function HomeAdmin() {
  return (
    <div className={cx('wrapper')}>
      Wellcome Admin <span>(Di chuột sang bên phải để hiển thị Menu)</span>
    </div>
  );
}

export default HomeAdmin;

import styles from './MessageUI.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function MessageUI({ type, msg }) {
  return (
    <div className={cx('toastId')}>
      {/* Succes */}
      <div className={cx('toast', `toast--${type}`)}>
        <div className={cx('toast__icon')}>
          <FontAwesomeIcon icon={faCheckCircle} />
        </div>
        <div className={cx('toast__body')}>
          <h2 className={cx('toast__title')}>{type}</h2>
          <p className={cx('toast__msg')}>{msg}</p>
        </div>
        <div className={cx('toast__close')}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </div>
    </div>
  );
}

export default MessageUI;

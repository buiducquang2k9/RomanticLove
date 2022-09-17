import styles from './ChangePass.module.scss';
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { firestoreDB } from '../AddPost/firebase-config';
import { doc, updateDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);
function ChangePass() {
  document.title = 'Thay đổi mật khẩu';
  const [updateUser, setUpdateUser] = useState({
    username: '',
    password: '',
  });
  const handleSubmit = () => {
    const docRef = doc(firestoreDB, 'pass', 'OA9AHIhyluiVjey979kk');
    updateDoc(docRef, {
      password: updateUser.password,
      username: updateUser.username,
    });
    toast.success('Tạo bài viết thành công !', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div className={cx('change-content')}>
      <div className={cx('form')}>
        <div className={cx('form-heading')}>Change User</div>
        <div className={cx('input-item')}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            onChange={(e) => setUpdateUser({ ...updateUser, username: e.target.value })}
          />
        </div>
        <div className={cx('input-item')}>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            onChange={(e) => setUpdateUser({ ...updateUser, password: e.target.value })}
          />
        </div>
        <button onClick={handleSubmit} className={cx('submit')}>
          Change
        </button>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
}

export default ChangePass;

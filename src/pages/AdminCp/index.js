import { Routes, Route } from 'react-router-dom';
import MenuAdmin from './components/Menu';
import { puplicRouter } from './routes';
import styles from './AdminCp.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { collection, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { firestoreDB } from '../AdminCp/pages/AddPost/firebase-config';

const cx = classNames.bind(styles);
function AdminCp() {
  document.title = 'Admin Cp Login';
  const [pass, setPass] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const colRef = collection(firestoreDB, 'pass');
      onSnapshot(colRef, (snapshot) => {
        let results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setPass(results);
      });
    }
    fetchData();
  }, []);
  const [user, setUser] = useState({ username: '', password: '' });
  const [adminUser, setAdminUser] = useState({ username: '', password: '' });
  useEffect(() => {
    pass.map((passItem) => {
      setAdminUser({ username: passItem.username, password: passItem.password });
    });
  }, [pass]);
  const Logout = () => {
    setUser({ username: '', password: '' });
  };
  return (
    <>
      {user.username === adminUser.username && user.password === adminUser.password ? (
        <>
          <div className={cx('AppAdmin')}>
            <MenuAdmin Logout={Logout} />
            <Routes>
              {puplicRouter.map((route, index) => {
                const Page = route.component;
                return <Route key={index} path={route.path} element={<Page />} />;
              })}
            </Routes>
          </div>
        </>
      ) : (
        <>
          <div className={cx('formLogin')}>
            <form>
              <div className={cx('form')}>
                <div className={cx('formHeading')}>Form Login</div>
                <div className={cx('formItem')}>
                  <input type="text" onChange={(e) => setUser({ ...user, username: e.target.value })} required />
                  <span>Username</span>
                  <i></i>
                </div>
                <div className={cx('formItem')}>
                  <input type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} required />
                  <span>Password</span>
                  <i></i>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}

export default AdminCp;

import React, { useState, useEffect } from 'react';
import styles from './Posts.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { collection, onSnapshot } from 'firebase/firestore';
import { firestoreDB } from '../AdminCp/pages/AddPost/firebase-config';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Posts() {
  document.title = 'Bài viết - Romantic Love';
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const colRef = collection(firestoreDB, 'posts');
      onSnapshot(colRef, (snapshot) => {
        let results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setPosts(results);
      });
    }
    fetchData();
  }, []);
  const [postKey, setPostKey] = useState(-1);
  console.log(postKey);
  return (
    <div className={cx('wrapper')}>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div key={index} className={cx('post-item')}>
            <div
              onClick={() => {
                // if (postKey === index) {
                //   setPostKey(-1);
                // }
                // if (postKey !== index) {
                //   setPostKey(index);
                // }
                setPostKey(index);
              }}
            >
              <div className={cx('post-author')}>
                <div className={cx('post-image')}>
                  <img src={post.image} alt={post.title} />
                </div>
              </div>
              <div className={cx('post-body')}>
                <div className={cx('post-title')}>{post.title}</div>
              </div>
            </div>
            {postKey === index ? (
              <div className={cx('post-content-view')} key={index}>
                <div className={cx('post-content-view-content')}>
                  <div className={cx('post-view')}>
                    <div className={cx('post-content-close')}>
                      <FontAwesomeIcon
                        icon={faClose}
                        onClick={() => {
                          setPostKey(-1);
                        }}
                      />
                    </div>
                    <div className={cx('post-view-heading')}> {post.title}</div>
                    <div className={cx('post-view-info')}>
                      <div className={cx('post-view-info-content')}>
                        <div className={cx('post-view-info-author')}>
                          Tác giả: <span>{post.author}</span>
                        </div>
                        <div className={cx('post-view-info-date')}>
                          Ngày: <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                    <ReactMarkdown children={post.code} remarkPlugins={[remarkGfm]} />
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        ))
      ) : (
        <div className={cx('No-posts')}>Chưa có bài viết</div>
      )}
      <div className={cx('clear')}></div>
    </div>
  );
}

export default Posts;

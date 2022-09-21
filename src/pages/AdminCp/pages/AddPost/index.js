import React, { useState } from 'react';
import styles from './AddPost.module.scss';
import classNames from 'classnames/bind';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import {
  faBold,
  faClose,
  faItalic,
  faLink,
  faListDots,
  faListNumeric,
  faQuoteLeft,
  faRulerHorizontal,
  faStrikethrough,
  faTable,
  faTasks,
} from '@fortawesome/free-solid-svg-icons';
import { faImage, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { collection, addDoc } from 'firebase/firestore';
import { firestoreDB } from './firebase-config';

const cx = classNames.bind(styles);
function AddPost() {
  const [input, setInput] = useState();
  const [title, setTitle] = useState('');
  if (title === '') {
    document.title = 'Thêm bài viết';
  } else {
    document.title = title;
  }
  // handle
  const p = input;
  const handleBold = () => {
    setInput(p + '\n\n**abc**');
  };
  const handleItalic = () => {
    setInput(p + '\n\n*abc*');
  };
  const handleStrikethrough = () => {
    setInput(p + '\n\n~~abc~~');
  };
  const handleListDots = () => {
    setInput(p + '\n\n* abc\n\n*');
  };
  const handleListNum = () => {
    setInput(p + '\n\n1. abc\n\n2.');
  };
  const handleRulerHorizontal = () => {
    setInput(p + '\n\n---');
  };
  const handleTable = () => {
    setInput(p + '\n\n|Head|Head|\n|---|---|\n|Body|Body|');
  };
  const handleImage = () => {
    setInput(p + '\n\n![](https://files.fullstack.edu.vn/f8-prod/blog_posts/4685/63117986d6356.png)');
  };
  const handleLink = () => {
    setInput(p + '\n\n[abc](https://www.youtube.com)');
  };
  const handleTrash = () => {
    setInput('');
  };
  const handleTask = () => {
    setInput(p + '\n\n- [ ] Task 1\n- [ ] Task 1\n- [ ] Task 1\n- [ ] Task 1');
  };
  const handleQuote = () => {
    setInput(p + '\n\n>');
  };
  const [hideAddPosts, setHideAddPosts] = useState(true);
  // --------------------
  const [imageUrl, setImageUrl] = useState('');
  const [imageState, setImageState] = useState({
    loading: false,
    progress: 0,
  });
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      author: '',
      date: '',
      code: '',
      image: '',
    },
  });
  const handleNewPost = async (values) => {
    const colRef = collection(firestoreDB, 'posts');
    await addDoc(colRef, {
      ...values,
    });
  };
  const notify = () => {
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
  const handleSelectImage = (e) => {
    const file = e.target.files[0];
    const storage = getStorage();

    const metadata = {
      contentType: 'image/jpeg',
    };
    const storageRef = ref(storage, 'images/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageState({
          ...imageState,
          progress,
        });
        setImageState({
          ...imageState,
          loading: true,
        });
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case 'storage/unauthorized':
            break;
          case 'storage/canceled':
            break;
          case 'storage/unknown':
            break;
        }
        setImageState({
          ...imageState,
          loading: false,
        });
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setValue('image', downloadURL);
          setImageUrl(downloadURL);
          setImageState({
            progress: 100,
            loading: false,
          });
        });
      },
    );
  };
  return (
    <>
      <div className={cx('container')}>
        <form>
          <input
            type="text"
            placeholder="Viết tiêu đề"
            className={cx('input-title')}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className={cx('tool-post')}>
            <div className={cx('tool-icon')} onClick={handleBold}>
              <FontAwesomeIcon icon={faBold} />
            </div>
            <div className={cx('tool-icon')} onClick={handleItalic}>
              <FontAwesomeIcon icon={faItalic} />
            </div>
            <div className={cx('tool-icon')} onClick={handleStrikethrough}>
              <FontAwesomeIcon icon={faStrikethrough} />
            </div>
            <div className={cx('tool-icon')} onClick={handleListDots}>
              <FontAwesomeIcon icon={faListDots} />
            </div>
            <div className={cx('tool-icon')} onClick={handleListNum}>
              <FontAwesomeIcon icon={faListNumeric} />
            </div>
            <div className={cx('tool-icon')} onClick={handleRulerHorizontal}>
              <FontAwesomeIcon icon={faRulerHorizontal} />
            </div>
            <div className={cx('tool-icon')} onClick={handleTable}>
              <FontAwesomeIcon icon={faTable} />
            </div>
            <div className={cx('tool-icon')} onClick={handleImage}>
              <FontAwesomeIcon icon={faImage} />
            </div>
            <div className={cx('tool-icon')} onClick={handleLink}>
              <FontAwesomeIcon icon={faLink} />
            </div>
            <div className={cx('tool-icon')} onClick={handleQuote}>
              <FontAwesomeIcon icon={faQuoteLeft} />
            </div>
            <div className={cx('tool-icon')} onClick={handleTask}>
              <FontAwesomeIcon icon={faTasks} />
            </div>
            <div className={cx('tool-icon')} onClick={handleTrash}>
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
          <textarea className={cx('post-editor')} value={input} onChange={(e) => setInput(e.target.value)} />
        </form>

        <div className={cx('btn-addPost')}>
          <button className={cx('btn', 'btn-animation')} onClick={() => setHideAddPosts(!hideAddPosts)}>
            <span></span>
            <span></span>
            <span></span>
            <span>AddPost</span>
          </button>
        </div>
        <div className={cx('post-view')}>
          <ReactMarkdown children={input} remarkPlugins={[remarkGfm]} />
        </div>
      </div>
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
      {hideAddPosts ? (
        <></>
      ) : (
        <form className={cx('other-editor')} onSubmit={handleSubmit(handleNewPost)}>
          <div className={cx('other-editor-form')}>
            <FontAwesomeIcon
              icon={faClose}
              onClick={() => {
                setHideAddPosts(!hideAddPosts);
              }}
            />
            <div className={cx('other-editor-heading')}>Thêm bài viết</div>
            <div className={cx('other-editor-item')}>
              <label>Tiêu đề</label>
              <input type="text" placeholder="Tiêu đề" value={title} required {...register('title')} />
            </div>
            <div className={cx('other-editor-item')}>
              <label>Tác giả</label>
              <input type="text" placeholder="Tác giả" required {...register('author')} />
            </div>
            <div className={cx('other-editor-item')}>
              <label>Date</label>
              <input type="text" placeholder="Date" required {...register('date')} />
            </div>
            <div className={cx('other-editor-item')}>
              <label>Code</label>
              <textarea value={input} {...register('code')}></textarea>
            </div>
            <div className={cx('other-editor-item')}>
              <input type="file" name="image" onChange={handleSelectImage} />
              <div className={cx('progress-img-view')} style={{ width: imageState.progress + '%' }}></div>
              {(imageUrl || imageState.loading) && (
                <>
                  {!imageState.loading ? (
                    <img src={imageUrl} className={cx('other-editor-img-view')} alt="" />
                  ) : (
                    <div className={cx('loading-img')}>
                      <div className={cx('loading')}></div>
                    </div>
                  )}
                </>
              )}
            </div>
            <input type="submit" onClick={notify} value="Add" className={cx('other-editor-submit')} />
          </div>
        </form>
      )}
    </>
  );
}

export default AddPost;

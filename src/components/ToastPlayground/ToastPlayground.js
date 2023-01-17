import React, { useState } from 'react';
import Button from '../Button';
import ToastShelf from '../ToastShelf/ToastShelf';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState('notice' | 'warning' | 'success' | 'error');

  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: 'Something went wrong!',
      variant: 'error'
    },
    {
      id: crypto.randomUUID(),
      message: '17 photos uploaded',
      variant: 'success'
    },
  ]
  );


  function handleDismiss(id) {
    const newToasts = toasts.filter(toast => {
      return toast.id !== id
    })

    setToasts(newToasts);
  }

  function hendleCreatePost(event) {
    event.preventDefault();

    const newToast = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant
      }
    ]

    setToasts(newToast);
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} handleDismiss={handleDismiss} />

      <form className={styles.controlsWrapper} onSubmit={(event) => hendleCreatePost(event)}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea value={message} onChange={(e) => { setMessage(e.target.value) }} id="message" className={styles.messageInput} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((option) => {
              return (
                <label key={option} htmlFor={option}>
                  <input
                    id={option}
                    type="radio"
                    name="variant"
                    value={option}
                    onChange={(e) => {
                      setVariant(e.target.value)
                    }}
                    checked={option === variant}
                  />
                  {option}
                </label>
              )
            })}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;

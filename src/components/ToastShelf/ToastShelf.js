import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(toast => (
        // {Array.from(toasts).map(toast => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            id={toast.id}
            variant={toast.variant}
            handleDismiss={handleDismiss}
            message={toast.message}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;

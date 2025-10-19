import clsx from 'clsx';
import styles from './ToggleMenu.module.scss';

export const ToggleMenu = ({ isOpen, onClick, ariaLabel = 'Toggle navigation' }) => {
  return (
    <button
      className={clsx(styles.toggle, isOpen && styles.active)}
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </button>
  );
};

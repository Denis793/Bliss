import clsx from 'clsx';
import styles from './Button.module.scss';

export const Button = ({ item, index, activeAccordion }) => {
  return (
    <>
      <button
        className={clsx(styles.button, { [styles.active]: activeAccordion === index })}
        type="button"
        onClick={() => handleAccordionClick(index)}
      >
        {item.question}
      </button>
    </>
  );
};

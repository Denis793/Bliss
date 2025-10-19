import clsx from 'clsx';
import styles from './AccordionButton.module.scss';

export const AccordionButton = ({ item, index, activeAccordion, setActiveAccordion }) => {
  const handleClick = () => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <button
      className={clsx(styles.faqButton, { [styles.active]: activeAccordion === index })}
      type="button"
      onClick={handleClick}
    >
      {item.question}
    </button>
  );
};

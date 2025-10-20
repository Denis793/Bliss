import clsx from 'clsx';
import styles from './Button.module.scss';

export const Button = ({
  children,
  className,
  onClick,
  href,
  type = 'button',
  variant = 'primary',
  disabled,
  id,
  'aria-label': ariaLabel,
  ...restProps
}) => {
  const baseClasses = clsx(styles.button, styles[variant], className);

  const linkProps = {
    id,
    'aria-label': ariaLabel,
    disabled,
    target: restProps.target,
    rel: restProps.rel,
    download: restProps.download,
  };

  const buttonProps = {
    id,
    'aria-label': ariaLabel,
    disabled,
    'aria-expanded': restProps['aria-expanded'],
    'aria-controls': restProps['aria-controls'],
  };

  if (href) {
    return (
      <a href={href} className={baseClasses} onClick={onClick} {...linkProps}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseClasses} type={type} onClick={onClick} {...buttonProps}>
      {children}
    </button>
  );
};

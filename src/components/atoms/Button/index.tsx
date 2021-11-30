import s from './Button.module.css';
import Icon from 'components/atoms/Icon';
import classnames from 'classnames';

import { ButtonText } from 'components/atoms/Typography';

export interface ButtonProps {
  onClick(): void,
  children: React.ReactNode,
  buttonType?: 'primary' | 'secondary',
  size?: 'small' | 'medium',
  disabled?: boolean,
  loading?: boolean,
}

const Button = (props: ButtonProps) => {
  const {
    children,
    onClick,
    buttonType = 'primary',
    size = 'medium',
    disabled,
    loading,
  } = props;

  return (
    <button
      onClick={onClick}
      type="button"
      className={classnames(s.button, s[buttonType], s[size], { [s.disabled]: disabled })}
      disabled={disabled}
    >
      <ButtonText>{!loading ? children : <Icon name="spinner" size="small" spin /> }</ButtonText>
    </button>
  );
}

export default Button;
import s from './Button.module.css';
import classnames from 'classnames';

import { ButtonText } from 'components/atoms/Typography';

export interface ButtonProps {
  onClick(): void,
  children: React.ReactNode,
  buttonType?: 'primary' | 'secondary',
  size?: 'small' | 'medium',
}

const Button = (props: ButtonProps) => {
  const {
    children,
    onClick,
    buttonType = 'primary',
    size = 'medium',
  } = props;

  return (
    <button
      onClick={onClick}
      type="button"
      className={classnames(s.button, s[buttonType], s[size])}
    >
      <ButtonText>{ children }</ButtonText>
    </button>
  );
}

export default Button;
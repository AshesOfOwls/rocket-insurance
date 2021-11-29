import s from './Button.module.css';
import classnames from 'classnames';

import { Body } from 'components/atoms/Typography';

export interface ButtonProps {
  onClick(): void,
  children: React.ReactNode,
  buttonType: 'primary' | 'secondary',
}

const Button = (props: ButtonProps) => {
  const {
    children,
    onClick,
    buttonType = 'primary',
  } = props;

  return (
    <button
      onClick={onClick}
      type="button"
      className={classnames(s.button, s[buttonType])}
    >
      <Body>{ children }</Body>
    </button>
  );
}

export default Button;
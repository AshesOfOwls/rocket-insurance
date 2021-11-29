import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import './library';
import Icons from './icons';
import s from './Icon.module.css';

export interface IconProps {
  name: typeof Icons[number],
  size: 'small' | 'medium' | 'large',
}

const Icon = (props: IconProps) => {
  const {
    name = 'check-square',
    size = 'medium',
  } = props;

  return (
    <div className={classnames(s.icon, s[size])}>
      <FontAwesomeIcon icon={name} />
    </div>
  );
};

export default Icon;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import './library';
import Icons from './icons';
import s from './Icon.module.css';

export interface IconProps {
  name: typeof Icons[number],
  size: 'small' | 'medium' | 'large',
  spin?: boolean,
}

const Icon = (props: IconProps) => {
  const {
    name = 'check-square',
    size = 'medium',
    spin,
  } = props;

  return (
    <div className={classnames(s.icon, s[size], { [s.spin]: spin })}>
      <FontAwesomeIcon icon={name} />
    </div>
  );
};

export default Icon;

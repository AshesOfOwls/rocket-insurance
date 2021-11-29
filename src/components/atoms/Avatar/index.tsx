import randomColor from 'randomcolor';

import s from './Avatar.module.css';

export interface AvatarProps {
  firstName: string
  lastName: string
}

const Avatar = (props: AvatarProps) => {
  const { firstName, lastName } = props;

  const color = randomColor({
    seed: firstName + lastName,
    luminosity: 'dark',
  });

  const firstInitial = firstName[0];
  const lastInitial = firstName[0];

  return (
    <div
      className={s.avatar}
      style={{ backgroundColor: color }}
    >
      { firstInitial }{ lastInitial }
    </div>
  );
}

export default Avatar;

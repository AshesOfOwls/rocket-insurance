import logo from 'routes/Home/logo.svg';
import { H5 } from 'components/atoms/Typography';
import Button from 'components/atoms/Button';
import { useNavigate } from "react-router-dom";

import s from './Header.module.css';

export interface HeaderProps {};

const Header = (props: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className={s.header}>
      <div className={s.logoWrapper} onClick={() => navigate('/home')}>
        <img src={logo} className={s.logo} alt="logo" />
        <H5>Rocket Insurance</H5>
      </div>
      <div>
        <Button onClick={() => navigate('/rating')} size="small">Rating Information</Button>
      </div>
    </div>
  );
}

export default Header;

import { useNavigate } from "react-router-dom";
import Button from 'components/atoms/Button';
import { H1, H4 } from 'components/atoms/Typography';

import logo from './logo.svg';

import s from './Home.module.css';

export interface HomeProps {}

const Home = (props: HomeProps) => {
  const navigate = useNavigate();

  return (
    <div className={s.home}>
      <H1 style={{ margin: '15px 0' }}>Rocket Insurance</H1>
      <img src={logo} className={s.appLogo} alt="logo" />
      <H4 style={{ margin: '15px 0' }}>Sometimes Newton happens. Sign up now!</H4>
      <Button onClick={() => navigate('/rating')}>BLAST OFF!</Button>
    </div>
  );
};

export default Home;

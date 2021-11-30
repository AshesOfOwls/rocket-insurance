import { useNavigate } from "react-router-dom";
import Button from 'components/atoms/Button';
import { H1, H5, H4 } from 'components/atoms/Typography';

import logo from './logo.svg';

import s from './Home.module.css';

export interface HomeProps {}

const Home = (props: HomeProps) => {
  const navigate = useNavigate();

  return (
    <div className={s.home}>
      <H1>Rocket Insurance</H1>
      <H5 style={{ margin: '15px 0' }}>A project by Quinn Elwood</H5>
      <img src={logo} className={s.appLogo} alt="logo" />
      <H4 style={{ margin: '15px 0 20px' }}>Sometimes Newton happens. Get a quote now!</H4>
      <Button onClick={() => navigate('/rating')}>BLAST OFF!</Button>
    </div>
  );
};

export default Home;

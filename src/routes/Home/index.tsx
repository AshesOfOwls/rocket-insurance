import { useNavigate } from "react-router-dom";
import Button from 'components/atoms/Button';

import logo from './logo.svg';

import s from './Home.module.css';

export interface HomeProps {}

const Home = (props: HomeProps) => {
  const navigate = useNavigate();

  return (
    <div className={s.home}>
      <img src={logo} className={s.appLogo} alt="logo" />
      <p>
        <Button onClick={() => navigate('/rating')}>Blast off!</Button>
      </p>
    </div>
  );
};

export default Home;

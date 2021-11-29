import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import Button from 'components/atoms/Button';
import { H1, H4 } from 'components/atoms/Typography';
import CREATE_QUOTE from 'hooks/mutations/quotes/create/mutation';

import logo from './logo.svg';

import s from './Home.module.css';

export interface HomeProps {}

const Home = (props: HomeProps) => {
  const navigate = useNavigate();

  const [createQuote, { loading, error }] = useMutation(CREATE_QUOTE, {
    update(cache, { data }) {
      console.log(data)
    },
  });

  const handleCreateQuote = () => {
    return createQuote({
      variables: {
        input: {
          first_name: 'Prairie',
          last_name: 'Johnson',
          address: {
            line_1: "123 Mulberry Lane",
            line_2: "3B",
            city: "Brooklyn",
            region: "NY",
            postal: "11211"
          }
        }
      }
    });
  };

  console.log(loading, error)
  
  return (
    <div className={s.home}>
      <H1 style={{ margin: '15px 0' }}>Rocket Insurance</H1>
      <img src={logo} className={s.appLogo} alt="logo" />
      <H4 style={{ margin: '15px 0' }}>Sometimes Newton happens. Sign up now!</H4>
      <Button onClick={() => navigate('/rating')}>BLAST OFF!</Button>

      {/* <Button onClick={handleCreateQuote}>CREATE A QUOTE</Button> */}
    </div>
  );
};

export default Home;

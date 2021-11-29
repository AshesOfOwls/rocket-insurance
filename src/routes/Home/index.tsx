import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import Button from 'components/atoms/Button';
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
      <img src={logo} className={s.appLogo} alt="logo" />
      <p>
        <Button onClick={() => navigate('/rating')}>Blast off!</Button>

        <Button onClick={handleCreateQuote}>CREATE A QUOTE</Button>
      </p>
    </div>
  );
};

export default Home;

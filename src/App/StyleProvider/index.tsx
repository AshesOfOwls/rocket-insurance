import './variables.css';
import './fonts.css';

export interface StyleProviderProps {
  children: React.ReactNode,
}

const StyleProvider = (props: StyleProviderProps) => {
  const { children } = props;

  return (<>{ children }</>);
};

export default StyleProvider;

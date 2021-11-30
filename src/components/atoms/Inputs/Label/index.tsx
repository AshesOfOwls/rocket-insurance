import { LabelText } from 'components/atoms/Typography';

import s from './Label.module.css';

export interface InputLabelProps {
  text: string
}

const InputLabel = (props: InputLabelProps) => {
  const { text } = props;

  return (
    <label className={s.label}><LabelText>{ text }</LabelText></label>
  );
};

export default InputLabel;

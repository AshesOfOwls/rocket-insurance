import { LabelText } from 'components/atoms/Typography';

export interface InputLabelProps {
  text: string
}

const InputLabel = (props: InputLabelProps) => {
  const { text } = props;

  return (
    <label><LabelText>{ text }</LabelText></label>
  );
};

export default InputLabel;

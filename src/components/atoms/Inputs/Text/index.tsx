import InputBase, { InputBaseProps } from "components/atoms/Inputs/Base";

export interface TextInputProps extends InputBaseProps {}

const TextInput = (props: TextInputProps) => {
  return (
    <InputBase {...props} />
  )
};

export default TextInput;

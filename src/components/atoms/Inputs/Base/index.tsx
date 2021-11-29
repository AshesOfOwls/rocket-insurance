import s from './InputBase.module.css';
import classnames from 'classnames';

export interface InputProps {
  value: string | number,
  onChange(e: React.FormEvent<HTMLInputElement>, val: string): void,
}

const InputBase = (props: InputProps) => {
  const { value, onChange } = props;

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    onChange(e, e.currentTarget.value);
  };

  return (
    <input
      className={classnames(s.input)}
      value={value}
      onChange={handleChange}
    />
  );
};

export default InputBase;

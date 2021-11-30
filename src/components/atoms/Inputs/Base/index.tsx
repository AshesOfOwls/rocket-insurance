import InputLabel from 'components/atoms/Inputs/Label';
import s from './InputBase.module.css';
import classnames from 'classnames';

export interface InputBaseProps {
  value: string | number,
  type?: string,
  onChange(e: React.FormEvent<HTMLInputElement>, val: string): void,
  disabled?: boolean,
  label?: string,
}

const InputBase = (props: InputBaseProps) => {
  const { value, onChange, type, disabled, label } = props;

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    onChange(e, e.currentTarget.value);
  };

  return (
    <div className={s.inputWrapper}>
      {label && (<InputLabel text={label} />)}
      <input
        className={classnames(s.input)}
        value={value}
        onChange={handleChange}
        type={type}
        disabled={disabled}
      />
    </div>
  );
};

export default InputBase;

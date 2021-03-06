import InputLabel from 'components/atoms/Inputs/Label';
import s from './InputBase.module.css';
import classnames from 'classnames';
import { InputHTMLAttributes } from 'react';

export interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string | number,
  type?: string,
  onInputChange?(e: React.FormEvent<HTMLInputElement>, val: string): void,
  disabled?: boolean,
  label?: string,
  expand?: boolean,
}

const InputBase = (props: InputBaseProps) => {
  const { value, onChange, onInputChange, type, disabled, label, expand, ...otherProps } = props;

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    if(!onInputChange) return;
    onInputChange(e, e.currentTarget.value);
  };

  return (
    <div className={classnames(s.inputWrapper, { [s.expand]: expand })}>
      {label && (<InputLabel text={label} />)}
      <input
        className={classnames(s.input)}
        value={value}
        onChange={onChange || handleChange}
        type={type}
        disabled={disabled}
        {...otherProps}
      />
    </div>
  );
};

export default InputBase;

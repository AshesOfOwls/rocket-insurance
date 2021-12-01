import Select from 'react-select';
import Label from "components/atoms/Inputs/Label";

export interface SelectInputProps {
  options: any,
  value: any,
  label: string,
  onChange(value: any): void,
  disabled?: boolean,
}

const SelectInput = (props: SelectInputProps) => {
  const { options, value, label, onChange, disabled } = props;

  const handleOnChange = (value: any) => {
    onChange(value)
  }
  
  return (
    <div>
      { label && <Label text={label} /> }
      <Select
        options={options}
        isSearchable={false}
        value={value}
        onChange={handleOnChange}
        isDisabled={disabled}
      />
    </div>
  );
};

export default SelectInput;

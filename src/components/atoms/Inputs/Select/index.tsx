import Select from 'react-select';
import Label from "components/atoms/Inputs/Label";

export interface SelectInputProps {
  options: any,
  value: any,
  label: string,
}

const SelectInput = (props: SelectInputProps) => {
  const { options, value, label } = props;

  return (
    <div>
      { label && <Label text={label} /> }
      <Select
        options={options}
        isSearchable={false}
        value={value}
      />
    </div>
  );
};

export default SelectInput;

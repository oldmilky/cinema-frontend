import { FC } from "react";
import ReactSelect, { OnChangeValue } from "react-select";
import makeAnimated from "react-select/animated";
import "../../../assets/styles/react-select.scss";
import { IOption, ISelect } from "./Select.interface";
import s from "./Select.module.scss";

const animatedComponents = makeAnimated();

const Select: FC<ISelect> = ({
  placeholder,
  error,
  isMulti,
  options,
  field,
  isLoading,
  style,
}) => {
  const onChange = (newValue: OnChangeValue<IOption, boolean>) => {
    field.onChange(
      isMulti
        ? (newValue as IOption[]).map((item: IOption) => item.value)
        : (newValue as IOption).value
    );
  };

  const getValue = () => {
    if (field.value) {
      return isMulti
        ? options.filter(option => field.value.indexOf(option.value) >= 0)
        : options.find(option => option.value === field.value);
    } else {
      return isMulti ? [] : ("" as any);
    }
  };

  return (
    <div className={s.select} style={style}>
      <div className={s.container}>
        <span className={s.span}>{placeholder}</span>
        <ReactSelect
          classNamePrefix="custom-select"
          placeholder={""}
          options={options}
          value={getValue()}
          onChange={onChange}
          isMulti={isMulti}
          components={animatedComponents}
          isLoading={isLoading}
        />
      </div>
      {error && <span className={s.error}>{error.message}</span>}
    </div>
  );
};

export default Select;

import { CSSProperties, FC } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import Field from "./Field";
import s from "./Field.module.scss";

interface ISlugField {
  error?: FieldError;
  register: UseFormRegister<any>;
  generate: () => void;
  style?: CSSProperties;
}

const SlugField: FC<ISlugField> = ({ generate, register, error, style }) => {
  return (
    <div className={s.slugField} style={style}>
      <Field
        {...register("slug", {
          required: "Slug is required",
        })}
        placeholder="Enter slug"
        error={error}
        title="SLUG"
      />
      <div className={s.slugButton} onClick={generate}>
        Generate
      </div>
    </div>
  );
};

SlugField.displayName = "Field";

export default SlugField;

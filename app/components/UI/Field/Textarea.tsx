import { forwardRef } from "react";
import { ITextarea } from "./Field.interface";
import s from "./Field.module.scss";

const Textarea = forwardRef<HTMLTextAreaElement, ITextarea>(
  ({ title, placeholder, error, style, ...rest }, ref) => {
    return (
      <div className={s.fieldWrap} style={style}>
        <div className={s.labelTextarea}>
          <span className={s.span}>{title}</span>
          <textarea
            className={s.textarea}
            placeholder={placeholder}
            ref={ref}
            {...rest}
          />
        </div>
        {error && <p className={s.error}>{error.message}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
export default Textarea;
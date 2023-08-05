"use client";

import { forwardRef } from "react";
import { IField } from "./Field.interface";
import s from "./Field.module.scss";

const Field = forwardRef<HTMLInputElement, IField>(
  ({ title, placeholder, error, type = "text", style, ...rest }, ref) => {
    return (
      <div className={s.fieldWrap} style={style}>
        <div className={s.label}>
          <span className={s.span}>{title}</span>
          <input
            className={s.field}
            placeholder={placeholder}
            type={type}
            ref={ref}
            {...rest}
            autoComplete="off"
          />
        </div>
        {error && <p className={s.error}>{error.message}</p>}
      </div>
    );
  }
);

Field.displayName = "Field";

export default Field;

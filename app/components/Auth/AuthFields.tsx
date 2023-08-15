import { FC } from "react";
import { FormState, UseFormRegister } from "react-hook-form";
import { validEmail } from "../../shared/types/regex";
import Field from "../UI/Field/Field";

interface IAuthFields {
  register: UseFormRegister<any>;
  formState: FormState<any>;
  isPasswordRequired?: boolean;
}

const AuthFields: FC<IAuthFields> = ({
  register,
  formState: { errors },
  isPasswordRequired,
}) => {
  return (
    <>
      <Field
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: validEmail,
            message: "Please enter a valid email address",
          },
        })}
        title="E-MAIL"
        placeholder="Enter email"
        error={errors.email}
        style={{ width: "500px" }}
      />

      <Field
        {...register(
          "password",
          isPasswordRequired
            ? {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              }
            : {}
        )}
        title="PASSWORD"
        placeholder="Enter password"
        type="password"
        error={errors.password}
        style={{ width: "500px" }}
      />
    </>
  );
};

export default AuthFields;

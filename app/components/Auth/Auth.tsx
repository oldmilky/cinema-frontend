"use client";

import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useActions } from "../../hooks/useActions";
import { useAuth } from "../../hooks/useAuth";
import { IAuthInput } from "./Auth.interface";
import s from "./Auth.module.scss";
import AuthFields from "./AuthFields";
import { useAuthRedirect } from "./useAuthRedirect";

const Auth: FC = () => {
  useAuthRedirect();

  const { isLoading } = useAuth();
  const [type, setType] = useState<"login" | "register">("login");

  const {
    register: registerInput,
    handleSubmit,
    formState,
    reset,
  } = useForm<IAuthInput>({
    mode: "onChange",
  });

  const { login, register } = useActions();

  const onSubmit: SubmitHandler<IAuthInput> = async (data) => {
    if (type === "login") {
      await login(data);
    } else if (type === "register") {
      await register(data);
    }

    reset();
  };

  return (
    <section className={s.auth}>
      <h1 className={s.title}>Auth</h1>
      <div className={s.wrap}>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <AuthFields
            formState={formState}
            register={registerInput}
            isPasswordRequired
          />
          <div className={s.buttons}>
            <button
              className={s.buttonLogin}
              onClick={() => setType("login")}
              disabled={isLoading}
            >
              Login
            </button>
            <button
              className={s.buttonRegister}
              onClick={() => setType("register")}
              disabled={isLoading}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Auth;

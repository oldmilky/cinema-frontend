import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import AuthFields from "../../Auth/AuthFields";
import SkeletonLoader from "../../UI/Skeleton/Sketelon";
import s from "../Admin.module.scss";
import { IUserEditInput } from "./User.interface";
import { useUserEdit } from "./useUserEdit";

const UserEdit: FC = () => {
  const { handleSubmit, register, formState, setValue, control } =
    useForm<IUserEditInput>({
      mode: "onChange",
    });

  const { isLoading, onSubmit } = useUserEdit(setValue);

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      {isLoading ? (
        <SkeletonLoader count={3} />
      ) : (
        <>
          <div className={s.formUser}>
            <AuthFields
              register={register}
              formState={formState}
              isPasswordRequired={false}
            />
          </div>
          <Controller
            name="isAdmin"
            control={control}
            render={({ field }) => (
              <button
                onClick={e => {
                  e.preventDefault();
                  field.onChange(!field.value);
                }}
                className={s.button}
              >
                {field.value ? "Make it regular user" : "Make it admin"}
              </button>
            )}
          />
        </>
      )}

      <button className={s.formButtonSave}>Update</button>
    </form>
  );
};

export default UserEdit;

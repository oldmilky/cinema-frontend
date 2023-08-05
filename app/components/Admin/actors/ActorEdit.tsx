import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import Skeleton from "react-loading-skeleton";
import { generateSlug } from "../../../utils/string/generateSlug";
import Field from "../../UI/Field/Field";
import SlugField from "../../UI/Field/SlugField";
import UploadField from "../../UI/UploadField/UploadField";
import s from "../Admin.module.scss";
import { IActorEditInput } from "./ActorEdit.interface";
import { useActorEdit } from "./useActorEdit";

const ActorEdit: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
    control,
  } = useForm<IActorEditInput>({
    mode: "onChange",
  });

  const { isLoading, onSubmit } = useActorEdit(setValue);

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      {isLoading ? (
        <Skeleton count={3} />
      ) : (
        <div className={s.formEdit}>
          <Field
            {...register("name", {
              required: "Name is required",
            })}
            placeholder="Enter name"
            error={errors.name}
            style={{ width: "50%" }}
            title="NAME"
          />
          <SlugField
            register={register}
            error={errors.slug}
            generate={() => {
              setValue("slug", generateSlug(getValues("name")));
            }}
            style={{ width: "50%" }}
          />
        </div>
      )}

      <Controller
        name="photo"
        control={control}
        defaultValue=""
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <UploadField
            placeholder="PHOTO"
            error={error}
            folder="actors"
            value={value}
            onChange={onChange}
            style={{ width: "48%" }}
          />
        )}
        rules={{
          required: "Photo is required!",
        }}
      />

      <button className={s.formButtonSave}>Update</button>
    </form>
  );
};

export default ActorEdit;

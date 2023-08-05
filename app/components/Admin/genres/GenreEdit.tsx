import { FC } from "react";
import { useForm } from "react-hook-form";
import Skeleton from "react-loading-skeleton";
import { generateSlug } from "../../../utils/string/generateSlug";
import Field from "../../UI/Field/Field";
import SlugField from "../../UI/Field/SlugField";
import Textarea from "../../UI/Field/Textarea";
import s from "../Admin.module.scss";
import { IGenreEditInput } from "./GenreEdit.interface";
import { useGenreEdit } from "./useGenreEdit";

const GenreEdit: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<IGenreEditInput>({
    mode: "onChange",
  });

  const { isLoading, onSubmit } = useGenreEdit(setValue);

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
            style={{ width: "33%" }}
            title="NAME"
          />
          <SlugField
            register={register}
            error={errors.slug}
            generate={() => {
              setValue("slug", generateSlug(getValues("name")));
            }}
            style={{ width: "33%" }}
          />
          <Field
            {...register("icon", {
              required: "Icon is required",
            })}
            placeholder="Enter icon"
            error={errors.slug}
            style={{ width: "33%" }}
            title="ICON (react-icon)"
          />
        </div>
      )}

      <Textarea
        {...register("description", {
          required: "Description is required",
        })}
        style={{ width: "100%" }}
        title="DESCRIPTION"
        placeholder="Enter description"
        error={errors.description}
      />

      <button className={s.formButtonSave}>Update</button>
    </form>
  );
};

export default GenreEdit;

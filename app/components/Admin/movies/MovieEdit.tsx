import dynamic from "next/dynamic";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import Skeleton from "react-loading-skeleton";
import { generateSlug } from "../../../utils/string/generateSlug";
import Field from "../../UI/Field/Field";
import SlugField from "../../UI/Field/SlugField";
import UploadField from "../../UI/UploadField/UploadField";
import s from "../Admin.module.scss";
import { IMovieEditInput } from "./MovieEdit.interface";
import { useAdminActors } from "./useAdminActors";
import { useAdminGenres } from "./useAdminGenres";
import { useMovieEdit } from "./useMovieEdit";

const DynamicSelect = dynamic(() => import('../../UI/Select/Select'), {
	ssr: false,
})

const MovieEdit: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
    control,
  } = useForm<IMovieEditInput>({
    mode: "onChange",
  });

  const { isLoading, onSubmit } = useMovieEdit(setValue);

  const { data: genres, isLoading: isGenresLoading } = useAdminGenres()
	const { data: actors, isLoading: isActorsLoading } = useAdminActors()

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      {isLoading ? (
        <Skeleton count={2} />
      ) : (
        <div className={s.formEdit}>
          <Field
            {...register("title", {
              required: "Title is required",
            })}
            placeholder="Enter title"
            error={errors.title}
            style={{ width: "50%" }}
            title="TITLE"
          />
          <SlugField
            register={register}
            error={errors.slug}
            generate={() => {
              setValue("slug", generateSlug(getValues("title")));
            }}
            style={{ width: "50%" }}
          />
        </div>
      )}

      {isLoading ? (
        <Skeleton count={3} />
      ) : (
        <div className={s.formEdit}>
          <Field
            {...register("paramaters.country", {
              required: "Country is required!",
            })}
            placeholder="Enter country"
            error={errors.paramaters?.country}
            style={{ width: "33%" }}
            title="COUNTRY"
          />
          <Field
            {...register("paramaters.duration", {
              required: "Duration is required",
            })}
            placeholder="Enter duration"
            error={errors.paramaters?.duration}
            style={{ width: "33%" }}
            title="DURATION (min)"
          />
          <Field
            {...register("paramaters.year", {
              required: "Year is required",
            })}
            placeholder="Enter year"
            error={errors.paramaters?.year}
            style={{ width: "33%" }}
            title="YEAR"
          />
        </div>
      )}

      {isLoading ? (
        <Skeleton count={2} />
      ) : (
        <div className={s.formEdit}>
          <Controller
            name="genres"
            control={control}
            rules={{
              required: "Please select at least one genre!",
            }}
            render={({ field, fieldState: { error } }) => (
              <DynamicSelect
                title={"GENRES"}
                error={error}
                field={field}
                placeholder="Genres"
                options={genres || []}
                isLoading={isGenresLoading}
                isMulti
                style={{ width: "50%" }}
              />
            )}
          />
          <Controller
            name="actors"
            control={control}
            rules={{
              required: "Please select at least one actor!",
            }}
            render={({ field, fieldState: { error } }) => (
              <DynamicSelect
                title={"ACTORS"}
                error={error}
                field={field}
                placeholder="Actors"
                options={actors || []}
                isLoading={isActorsLoading}
                isMulti
                style={{ width: "50%" }}
              />
            )}
          />
        </div>
      )}

      <div className={s.formEdit}>
        <Controller
          name="poster"
          control={control}
          defaultValue=""
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <UploadField
              placeholder="POSTER"
              error={error}
              folder="movies"
              value={value}
              onChange={onChange}
              style={{ width: "50%" }}
            />
          )}
          rules={{
            required: "Poster is required!",
          }}
        />
        <Controller
          name="bigPoster"
          control={control}
          defaultValue=""
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <UploadField
              placeholder="BIG POSTER"
              error={error}
              folder="movies"
              value={value}
              onChange={onChange}
              style={{ width: "50%" }}
            />
          )}
          rules={{
            required: "Big poster is required!",
          }}
        />
      </div>

      <Controller
        name="videoUrl"
        control={control}
        defaultValue=""
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <UploadField
            placeholder="VIDEO"
            error={error}
            folder="movies"
            value={value}
            onChange={onChange}
            style={{ width: "48%" }}
            isNoImage
          />
        )}
        rules={{
          required: "Video is required!",
        }}
      />

      <button className={s.formButtonSave}>Update</button>
    </form>
  );
};

export default MovieEdit;

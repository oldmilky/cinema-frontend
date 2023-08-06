import { FC } from "react";
import { useForm } from "react-hook-form";
import AuthFields from "../Auth/AuthFields";
import SkeletonLoader from "../UI/Skeleton/Sketelon";
import { IProfileInput } from "./Profile.interface";
import s from "./Profile.module.scss";
import { useProfile } from "./useProfile";

const Profile: FC = () => {
  const { handleSubmit, register, formState, setValue } =
    useForm<IProfileInput>({
      mode: "onChange",
    });

  const { isLoading, onSubmit } = useProfile(setValue);

  return (
    <section className={s.profile}>
      <h1 className={s.title}>Auth</h1>
      <div className={s.wrap}>
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <AuthFields formState={formState} register={register} />
            <button className={s.button} disabled={isLoading}>
              Update
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Profile;

import Image from "next/image";
import { FC } from "react";
import SkeletonLoader from "../Skeleton/Sketelon";
import { IUploadField } from "./UploadField.interface";
import s from "./UploadField.module.scss";
import { useUpload } from "./useUpload";

const UploadField: FC<IUploadField> = ({
  folder,
  value,
  onChange,
  placeholder,
  error,
  style,
  isNoImage = false,
}) => {
  const { isLoading, uploadFile } = useUpload(onChange, folder);

  return (
    <div className={s.uploadField} style={style}>
      <div className={s.container}>
        <span className={s.span}>{placeholder}</span>
        <label className={s.label}>
          <input className={s.fileInput} type="file" onChange={uploadFile} />
          <span className={s.label}>Choose file</span>
        </label>

        {!isNoImage && (
          <div className={s.wrap}>
            {isLoading ? (
              <SkeletonLoader count={1} className={s.skeletonLoader} />
            ) : (
              value && (
                <Image
                  src={value}
                  alt="img"
                  width={100}
                  height={100}
                  unoptimized
                  className={s.fileChoose}
                />
              )
            )}
          </div>
        )}
      </div>
      {error && <span className={s.error}>{error.message}</span>}
    </div>
  );
};

export default UploadField;

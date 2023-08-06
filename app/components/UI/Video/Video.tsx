import { FC } from "react";
import { useAuth } from "../../../hooks/useAuth";
import MaterialIcon from "../MaterialIcon";
import AuthPlaceholder from "./AuthPlaceholder";
import { IVideoPlayer } from "./Video.interface";
import s from "./Video.module.scss";
import { useVideo } from "./useVideo";

const Video: FC<IVideoPlayer> = ({ slug, videoSource }) => {
  const { action, video, videoRef } = useVideo();
  const { user } = useAuth();

  return (
    <div className={s.video}>
      {user ? (
        <>
          <video
            ref={videoRef}
            className={s.videoPlayer}
            src={`${videoSource}#t=8`}
            preload="metadata"
          />

          <div className={s.progress}>
            <div
              className={s.progressBar}
              style={{ width: `${video.progress}%` }}
            />
          </div>

          <div className={s.wrap}>
            <div className={s.wrapper}>
              <button className={s.buttonAction} onClick={action.revert}>
                <MaterialIcon name="MdHistory" />
              </button>
              <button className={s.buttonAction} onClick={action.toggleVideo}>
                <MaterialIcon
                  name={video.isPlaying ? "MdPause" : "MdPlayArrow"}
                />
              </button>
              <button className={s.buttonAction} onClick={action.forward}>
                <MaterialIcon name="MdUpdate" />
              </button>

              <div className={s.timeControls}>
                <p className={s.controlsTime}>
                  {Math.floor(video.currentTime / 60) +
                    ":" +
                    ("0" + Math.floor(video.currentTime % 60)).slice(-2)}
                </p>
                <p className={s.controlsTime} style={{margin: '0 5px 0 5px'}}> / </p>
                <p className={s.controlsTime}>
                  {Math.floor(video.videoTime / 60) +
                    ":" +
                    ("0" + Math.floor(video.videoTime % 60)).slice(-2)}
                </p>
              </div>
            </div>
            <button className={s.buttonAction} onClick={action.fullScreen}>
              <MaterialIcon name="MdFullscreen" />
            </button>
          </div>
        </>
      ) : (
        <AuthPlaceholder slug={slug} />
      )}
    </div>
  );
};

export default Video;

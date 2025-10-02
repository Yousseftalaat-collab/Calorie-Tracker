import { useEffect, useRef } from "react";
import Styles from "./SplashScreen.module.css";
import WatchVideo from "../assets/Watch.mp4";

function SplashScreen({ onFinish }) {
  const videoRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={Styles.splash}>
      <video
        ref={videoRef}
        autoPlay
        muted
        className={Styles["splash-video"]}
        onEnded={onFinish}
      >
        <source src={WatchVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default SplashScreen;

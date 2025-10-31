"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import cn from "classnames";

import PlayIcon from "@images/icons/play.svg";
import previewImage from "@images/home/video-girl.png";

import styles from "./lastAchievement.module.scss";

export default function LastAchievement() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      console.log("handlePlay");

      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={styles.achievement}>
      <div className={styles.videoWrapper}>
        <div className={cn(styles.videoPreview, isPlaying && styles.hidden)}>
          <Image src={previewImage} alt="Achievement preview" width={300} height={200} className={styles.previewCover} />
          <button className={styles.playButton} onClick={handlePlay}>
            <PlayIcon />
          </button>
        </div>
        <video ref={videoRef} src={"/images/home/play.mp4"} onClick={handlePause} className={styles.video} controls={false} />
      </div>

      <div className={styles.info}>
        <p className={styles.title}>Last Achievement</p>
        <p className={cn("title-h5", styles.description)}>Your awareness cleaned the air so kids could breathe freely 🌬️</p>
      </div>
    </div>
  );
}

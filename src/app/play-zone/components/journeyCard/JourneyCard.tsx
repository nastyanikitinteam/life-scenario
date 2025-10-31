import Image from "next/image";
import cn from "classnames";

import LastAchievement from "../lastAchievement/LastAchievement";

import LevelInfo from "../levelInfo/LevelInfo";

import achievementImage from "@images/home/achievement.png";
import totalScoreLineUrl from "@images/home/total.svg?url";

import styles from "./journeyCard.module.scss";

export default function JourneyCard() {
  return (
    <div className={styles.journeyCard}>
      <div className={styles.achievement}>
        <Image src={achievementImage} alt="achievement" width={100} height={100} style={{ width: "100%", height: "auto" }} />
      </div>
      <LevelInfo level={3} currentScore={364} maxScore={364 + 364} />
      <div className={styles.totalScore}>
        <p className="title-h5">Total Score</p>
        <Image
          src={totalScoreLineUrl}
          alt="total"
          width={100}
          height={100}
          style={{ width: "100%", height: "auto" }}
          className={styles.totalScoreLine}
        />
        <h4 className={cn("title-h4", styles.totalScoreTitle)}>1758</h4>
      </div>
      <LastAchievement />
    </div>
  );
}

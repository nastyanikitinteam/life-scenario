import cn from "classnames";

import styles from "./levelInfo.module.scss";

type LevelInfoProps = {
  level: number;
  currentScore: number;
  maxScore: number;
};

export default function LevelInfo({ level, currentScore, maxScore }: LevelInfoProps) {
  const progress = Math.min((currentScore / maxScore) * 100, 100);
  const remaining = Math.max(maxScore - currentScore, 0);

  return (
    <div className={styles.levelInfo}>
      <h4 className="title-h5">Your Journey</h4>
      <h2 className={styles.level}>
        Level <span>{level}</span>
      </h2>

      <div className={styles.progressBar}>
        <div className={styles.progressFilled} style={{ width: `${progress}%` }} />
        <div className={styles.progressRemaining} style={{ width: `${100 - progress}%` }} />
      </div>

      <p className={cn(styles.remaining, "title-h5")}>{remaining} to next level</p>
    </div>
  );
}

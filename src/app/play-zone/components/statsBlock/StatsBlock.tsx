import Image from "next/image";
import cn from "classnames";

import StatsItem from "./StatsItem";
import Button from "@/components/ui/button/Button";

import trophyIcon from "@images/home/trophy.png";
import wingsIcon from "@images/home/wings.png";
import playIcon from "@images/home/play.png";
import medalIcon from "@images/home/medal.png";
import lionIcon from "@images/home/lion.png";
import cloudIcon from "@images/home/cloud.png";
import ChatIcon from "@images/icons/chat.svg";

import styles from "./statsBlock.module.scss";

export default function StatsBlock() {
  return (
    <div className={styles.statsBlock}>
      <div className={styles.grid}>
        <StatsItem icon={trophyIcon} value={94} label="Best Result" />
        <StatsItem icon={wingsIcon} value={72} label="Last Score" diff={-5} />
        <StatsItem icon={playIcon} value={35} label="Sessions Played" />
        <StatsItem icon={medalIcon} value={77} label="Average Score (mo.)" diff={+2} />
      </div>

      <div className={styles.traitList}>
        <div className={styles.traitItem}>
          <Image src={lionIcon} alt="Courage" width={60} height={60} />
          <div className={styles.traitInfo}>
            <p className={styles.traitLabel}>Highest trait score (mo.)</p>
            <p className={cn(styles.traitTitle, "title-h5")}>COURAGE</p>
          </div>
          <span className={cn(styles.traitValue, styles.red)}>95</span>
        </div>

        <div className={styles.traitItem}>
          <Image src={cloudIcon} alt="Optimism" width={60} height={60} />
          <div className={styles.traitInfo}>
            <p className={styles.traitLabel}>Lowest trait average (mo.)</p>
            <p className={cn(styles.traitTitle, "title-h5")}>OPTIMISM</p>
          </div>
          <span className={cn(styles.traitValue, styles.blue)}>83</span>
        </div>
      </div>

      <Button icon={<ChatIcon />} href="#">
        CONTINUE JOURNEY
      </Button>
    </div>
  );
}

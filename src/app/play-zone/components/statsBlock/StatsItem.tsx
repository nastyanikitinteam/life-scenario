import Image from "next/image";
import cn from "classnames";

import type { StaticImageData } from "next/image";

import UpIcon from "@images/icons/arrow-up.svg";
import DownIcon from "@images/icons/arrow-down.svg";

import styles from "./statsBlock.module.scss";

type StatsItemProps = {
  icon: StaticImageData;
  value: number;
  label: string;
  diff?: number;
};

export default function StatsItem({ icon, value, label, diff }: StatsItemProps) {
  const isPositive = diff !== undefined && diff > 0;
  const isNegative = diff !== undefined && diff < 0;

  return (
    <div className={styles.statsItem}>
      <div className={styles.icon}>
        <Image src={icon} alt="icon" width={70} height={70} />
      </div>

      <div className={styles.info}>
        <div className={cn(styles.value, "title-h4")}>{value}</div>
        <div className={styles.label}>{label}</div>
      </div>

      {diff !== undefined && (
        <div className={cn(styles.diff, isPositive && styles.positive, isNegative && styles.negative)}>
          <span className={cn("icon", styles.diffIcon)}>{isPositive ? <UpIcon /> : <DownIcon />}</span>
          <span>{Math.abs(diff)}</span>
        </div>
      )}
    </div>
  );
}

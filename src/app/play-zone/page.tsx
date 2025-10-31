import JourneyCard from "./components/journeyCard/JourneyCard";
import StatsBlock from "./components/statsBlock/StatsBlock";

import styles from "./page.module.scss";

export default function PlayZone() {
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className={styles.container}>
          <JourneyCard />
          <StatsBlock />
        </div>
      </div>
    </div>
  );
}

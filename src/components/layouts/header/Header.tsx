import Link from "next/link";
import Image from "next/image";
import cn from "classnames";

import type { NavItem } from "@/types/nav";
import { navItems } from "@/config/nav";

import Logo from "@images/home/logo.svg";
import AvatarIcon from "@images/avatar.png";
import NotificationIcon from "@images/icons/notification.svg";

import styles from "./header.module.scss";

export default function Header() {
  const NEW_NOTIFICATION = true;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <Logo />
        </a>
        <nav className={styles.nav}>
          {navItems.map((item: NavItem) => (
            <Link key={item.label} href={item.href} className={styles.navItem}>
              <span className={cn("icon", styles.icon)}>{item.icon}</span>
              <p>{item.label}</p>
            </Link>
          ))}
        </nav>
        <div className={styles.info}>
          <button type="button" className={styles.notification}>
            <NotificationIcon />
            {NEW_NOTIFICATION && <span className={styles.notificationDot}></span>}
          </button>
          <button type="button" className={styles.avatar}>
            <Image src={AvatarIcon} alt="avatar" width={60} height={60} />
          </button>
        </div>
      </div>
    </header>
  );
}

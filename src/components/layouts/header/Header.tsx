"use client";

import Link from "next/link";
import Image from "next/image";
import cn from "classnames";
import { usePathname } from "next/navigation";

import type { NavItem } from "@/types/nav";
import { navItems } from "@/config/nav";

import Logo from "@images/home/logo.svg";
import avatarIcon from "@images/avatar.png";
import NotificationIcon from "@images/icons/notification.svg";

import styles from "./header.module.scss";

export default function Header() {
  const pathname = usePathname();
  const NEW_NOTIFICATION = true;

  return (
    <header className={styles.header}>
      <div className="wrapper">
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <Logo />
          </Link>

          <nav className={styles.nav}>
            {navItems.map((item: NavItem) => {
              const isActive = pathname === item.href;

              return (
                <Link key={item.label} href={item.href} className={cn(styles.navItem, { [styles.active]: isActive })}>
                  <span className={cn("icon", styles.icon)}>{item.icon}</span>
                  <p>{item.label}</p>
                </Link>
              );
            })}
          </nav>

          <div className={styles.info}>
            <button type="button" className={styles.notification}>
              <NotificationIcon />
              {NEW_NOTIFICATION && <span className={styles.notificationDot}></span>}
            </button>
            <button type="button" className={styles.avatar}>
              <Image src={avatarIcon} alt="avatar" width={60} height={60} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

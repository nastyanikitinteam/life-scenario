"use client";

import Link from "next/link";
import cn from "classnames";
import styles from "./button.module.scss";

import type { ButtonProps } from "@/types/ui";

export default function Button({ children, icon, iconPosition = "left", variant = "primary", className, ...props }: ButtonProps) {
  const content = (
    <>
      {icon && iconPosition === "left" && <span className={cn(styles.icon, "icon")}>{icon}</span>}
      <span className={styles.text}>{children}</span>
      {icon && iconPosition === "right" && <span className={cn(styles.icon, "icon")}>{icon}</span>}
    </>
  );

  const classNames = cn(styles.button, styles[variant], className);

  if ("href" in props) {
    const linkProps = props as Extract<ButtonProps, { href: string }>;
    const { href, target, rel } = linkProps;

    return (
      <Link href={href} target={target} rel={rel} className={classNames}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button type={buttonProps.type || "button"} {...buttonProps} className={classNames}>
      {content}
    </button>
  );
}

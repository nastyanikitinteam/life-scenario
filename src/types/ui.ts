import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export type BaseButtonProps = {
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  variant?: ButtonVariant;
  className?: string;
};

export type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

export type ButtonAsLink = BaseButtonProps & {
  href: string;
  onClick?: never;
  target?: string;
  rel?: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

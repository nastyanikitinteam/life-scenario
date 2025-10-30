import type { NavItem } from "@/types/nav";

import PlayZoneIcon from "@images/icons/play-zone.svg";
import MyWorldIcon from "@images/icons/my-world.svg";
import MySkillsIcon from "@images/icons/my-skills.svg";
import HowToPlayIcon from "@images/icons/how-to-play.svg";

export const navItems: NavItem[] = [
  {
    label: "Play Zone",
    href: "/play-zone",
    icon: <PlayZoneIcon />,
  },
  {
    label: "My World",
    href: "/world",
    icon: <MyWorldIcon />,
  },
  {
    label: "My Skills",
    href: "/skills",
    icon: <MySkillsIcon />,
  },
  {
    label: "How to play?",
    href: "/help",
    icon: <HowToPlayIcon />,
  },
];

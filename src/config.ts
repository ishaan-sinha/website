import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://750W.team",
  author: "Ved Kothavade",
  desc: "750W is a VEX Robotics team from South Brunswick, NJ.",
  title: "750 Wolves",
  ogImage: "astropaper-og.jpg",
  postPerPage: 3,
};

export const PAGES = [
  {
    name: "Outreach",
    href: "/outreach",
    active: "outreach",
  },
  {
    name: "Stats",
    href: "/stats",
    active: "stats",
  },
  {
    name: "About",
    href: "/about",
    active: "about",
  },
];

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 50,
  height: 150,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Mail",
    href: "mailto:sbhs.750w@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/750W",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sbhs_750w/",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@sbhs_750w",
    linkTitle: `${SITE.title} on TikTok`,
    active: true,
  },
];

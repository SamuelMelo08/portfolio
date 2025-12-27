import { ReactNode } from "react";

export type PropsCardProject = {

    hrefVideo: string;
    title: string;
    description: string;
    linkedin: string;
    link: string;

}

export type PropsCardSkill = {
    icon: ReactNode;
    title: string;
    content: string;
}

export type IconButtonProps = {
    theme: "dark" | "light";
    href: string;
    icon: ReactNode;
}

export type PropsGradientTitle = {
    textColors: string[]
}

export type ShinyTextProps = {
    text: string
    classname: string
}

export type SocialProps = {
  title: string;
  icon: ReactNode;
  href: string;
  type: "LINKEDIN" | "GITHUB" | "WHATSAPP" | "INSTAGRAM";
};

export type PropsVideoFullScreen = {
    title: string;
    hrefVideo : string
}

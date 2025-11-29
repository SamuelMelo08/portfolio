"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import LogoLoop from "../ui/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiPython, SiGit, SiGithub, SiGodotengine } from "react-icons/si";

const techLogos = [
  { node: <SiReact  />, title: "React" },
  { node: <SiNextdotjs  />, title: "Next.js" },
  { node: <SiTypescript  />, title: "TS" },
  { node: <SiTailwindcss  />, title: "Tailwind" },
  { node: <SiJavascript  />, title: "JS" },
  { node: <SiPython />, title: "Python" },
  { node: <SiGit />, title: "Git" },
  { node: <SiGithub />, title: "Github" },
  { node: <SiGodotengine />, title: "Godot" }
];

export default function SkillsLoop() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full overflow-hidden">
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={48}
        gap={40}
        fadeOut
        scaleOnHover
        fadeOutColor={theme === "dark" ? "#0A0A14" : "#F5F5FA"}
        ariaLabel="Skills"
        className="text-text"
      />
    </div>
  );
}

import { SocialProps } from "@/types/types";

export default function SocialButton(props: SocialProps) {

  const colorShadow: Record<SocialProps["type"], string> = {
    LINKEDIN: "#0A66C2",
    GITHUB: "#6e40c9",
    WHATSAPP: "#25D366",
    INSTAGRAM: "#C13584",
  };

  const shadowColor = colorShadow[props.type];

  return (
    <a href={props.href} target="_blank" rel="noreferrer" className="w-full">
      <div
        
        style={{ ["--shadow-color" as any]: shadowColor }}
        className={`flex gap-4 justify-start items-center text-text text-[14px] font-medium bg-input/99 w-full px-6 py-8 rounded-xl hover:scale-102 transition-all duration-300 hover:shadow-[0_0_14px_4px_var(--shadow-color)]`}
      >
        <span>{props.icon}</span>
        <span>{props.title}</span>
      </div>
    </a>
  );
}

import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Logo({ width = 160, height = 52, className = "" }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Starlabs Group — Enable. Engage. Empower. Enhance."
      width={width}
      height={height}
      className={className}
      priority
      style={{ objectFit: "contain", height: "auto" }}
    />
  );
}

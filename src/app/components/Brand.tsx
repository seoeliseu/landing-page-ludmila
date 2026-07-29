import Image from "next/image";

type BrandSize = "sm" | "md" | "lg";

const sizes: Record<
  BrandSize,
  { logo: string; gap: string; name: string; tagline: string; divider: string }
> = {
  sm: {
    logo: "h-10 lg:h-11",
    gap: "gap-3",
    name: "text-xs lg:text-sm",
    tagline: "text-[0.5rem]",
    divider: "h-8",
  },
  md: {
    logo: "h-14 xl:h-16",
    gap: "gap-3 xl:gap-4",
    name: "text-base xl:text-lg",
    tagline: "text-[0.55rem] xl:text-[0.6rem]",
    divider: "h-10 xl:h-12",
  },
  lg: {
    logo: "h-16 sm:h-20 lg:h-24 xl:h-32",
    gap: "gap-3 sm:gap-4 lg:gap-5 xl:gap-6",
    name: "text-lg sm:text-xl lg:text-2xl xl:text-3xl",
    tagline: "text-[0.55rem] sm:text-[0.6rem] lg:text-[0.65rem] xl:text-xs",
    divider: "h-12 sm:h-16 lg:h-20 xl:h-24",
  },
};

export default function Brand({
  size = "md",
  className = "",
  priority = false,
}: {
  size?: BrandSize;
  className?: string;
  priority?: boolean;
}) {
  const s = sizes[size];

  return (
    <div className={`flex items-center ${s.gap} ${className}`}>
      <Image
        src="/logo-lm-gold.png"
        alt="Ludmila Morais Advocacia"
        width={372}
        height={258}
        className={`${s.logo} w-auto`}
        priority={priority}
      />
      <span
        className={`${s.divider} w-px bg-gradient-to-b from-transparent via-beige-500/40 to-transparent`}
        aria-hidden="true"
      />
      <span className="flex flex-col justify-center">
        <span
          className={`${s.name} text-beige-100 font-light tracking-[0.18em] uppercase leading-tight whitespace-nowrap`}
        >
          Ludmila Morais
        </span>
        <span
          className={`${s.tagline} text-beige-400/70 font-[var(--font-inter)] tracking-[0.4em] uppercase mt-1.5`}
        >
          Advocacia
        </span>
      </span>
    </div>
  );
}

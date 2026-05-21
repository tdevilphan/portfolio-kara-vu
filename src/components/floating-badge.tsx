const colorClass = {
  violet: "bg-violetPop text-white",
  cyan: "bg-cyanPop text-ink",
  yellow: "bg-yellowPop text-ink",
  green: "bg-greenPop text-white",
  orange: "bg-orangePop text-white",
  blue: "bg-bluePop text-white",
};

type FloatingBadgeProps = {
  label: string;
  color: keyof typeof colorClass;
  className?: string;
};

export function FloatingBadge({
  label,
  color,
  className = "",
}: FloatingBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full px-4 py-2 text-sm font-black shadow-sticker ${colorClass[color]} ${className}`}
    >
      {label}
    </span>
  );
}

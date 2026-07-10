import type { HTMLAttributes } from "react";

type BadgeVariant = "default" | "accent" | "success" | "warning";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-[var(--bg-surface)] text-white",
  accent: "bg-[var(--accent)] text-white",
  success: "bg-[var(--success)] text-white",
  warning: "bg-[var(--warning)] text-black",
};

export default function Badge({
  variant = "default",
  className = "",
  ...props
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex w-fit items-center rounded-full",
        "px-3 py-1 text-xs font-medium",
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}

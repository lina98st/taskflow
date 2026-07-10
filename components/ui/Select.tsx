import type { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export default function Select({ className = "", ...props }: SelectProps) {
  return (
    <select
      className={[
        "w-full rounded-lg border border-[var(--border)]",
        "bg-[var(--bg-surface)] px-3 py-2.5",
        "text-sm text-white outline-none transition",
        "focus:border-[var(--accent)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}

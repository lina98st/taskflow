import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={[
        "w-full rounded-lg border border-[var(--border)]",
        "bg-[var(--bg-surface)] px-3 py-2.5",
        "text-sm text-white placeholder:text-[var(--text-dim)]",
        "outline-none transition focus:border-[var(--accent)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}

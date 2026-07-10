import type { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({ className = "", ...props }: TextareaProps) {
  return (
    <textarea
      className={[
        "w-full resize-none rounded-lg",
        "border border-[var(--border)]",
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

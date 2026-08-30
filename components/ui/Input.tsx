import type { InputHTMLAttributes } from "react";
import { CalendarDays } from "lucide-react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className = "", type, ...props }: InputProps) {
  if (type === "date") {
    return (
      <div className="relative">
        <input
          type="date"
          className={[
            "w-full rounded-lg border border-[var(--border)]",
            "bg-[var(--bg-surface)] px-3 py-2.5 pr-10",
            "text-sm text-white placeholder:text-[var(--text-dim)]",
            "outline-none transition focus:border-[var(--accent)]",
            "[&::-webkit-calendar-picker-indicator]:opacity-0",
            "[&::-webkit-calendar-picker-indicator]:absolute",
            "[&::-webkit-calendar-picker-indicator]:right-3",
            "[&::-webkit-calendar-picker-indicator]:h-5",
            "[&::-webkit-calendar-picker-indicator]:w-5",
            "[&::-webkit-calendar-picker-indicator]:cursor-pointer",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          {...props}
        />

        <CalendarDays
          aria-hidden="true"
          size={18}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white"
        />
      </div>
    );
  }

  return (
    <input
      type={type}
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

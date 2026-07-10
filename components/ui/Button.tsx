import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "danger";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]",
  secondary:
    "border border-[var(--border)] text-white hover:border-[var(--border-hover)] hover:bg-[var(--bg-surface)]",
  danger: "bg-[var(--danger)] text-white hover:opacity-90",
};

export default function Button({
  variant = "primary",
  fullWidth = false,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={[
        "rounded-lg px-4 py-2.5 text-sm font-semibold transition",
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-[var(--accent-light)] focus-visible:ring-offset-2",
        "focus-visible:ring-offset-[var(--bg-base)]",
        variantClasses[variant],
        fullWidth ? "w-full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}

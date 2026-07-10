import type { LabelHTMLAttributes } from "react";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export default function Label({ className = "", ...props }: LabelProps) {
  return (
    <label
      className={["mb-2 block text-sm font-medium text-white", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}

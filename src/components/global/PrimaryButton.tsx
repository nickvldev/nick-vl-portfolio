import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "sm" | "md";
}

export function PrimaryButton({
  children,
  className = "",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  const sizeClasses =
    size === "sm"
      ? "text-base md:text-lg px-6 py-2.5"
      : "text-lg lg:text-xl px-8 py-3.5";
  return (
    <button
      type={type}
      className={`bg-teal-600 rounded-lg text-white font-medium shadow-md hover:bg-teal-700 transition-all duration-300 hover:cursor-pointer hover:scale-105 active:scale-95 ${sizeClasses} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

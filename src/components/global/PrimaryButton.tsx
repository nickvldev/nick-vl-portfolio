import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function PrimaryButton({
  children,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`bg-teal-600 text-lg md:text-xl rounded-lg text-white px-8 py-3.5 font-medium shadow-sm hover:shadow-md hover:bg-teal-700 transition-all duration-300 hover:cursor-pointer hover:scale-105 active:scale-95 ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

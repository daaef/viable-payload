import Link from "next/link";
import { ReactNode } from "react";

type ButtonSize = "sm" | "md" | "lg" | "xl";
type ButtonVariant = "green" | "orange";

interface ViableButtonProps {
  title: string;
  href: string;
  size?: ButtonSize;
  softGreen?: boolean;
  variant?: ButtonVariant;
  disabled?: boolean;
  icon?: ReactNode;
  target?: "_self" | "_blank" | "_parent" | "_top";
  fullWidth?: boolean;
  [key: string]: any;
}

function getBaseStyles(): string {
  return `rounded-md transition ease-in-out duration-250 whitespace-nowrap flex items-center justify-center font-bold`;
}

function getSizeStyles(size: ButtonSize): string {
  const sizeOptions: { [key in ButtonSize]: string } = {
    sm: "px-4 py-2 text-xs max-w-[120px] min-h-[40px]",
    md: "px-6 py-3 text-base max-w-[160px] min-h-[48px]",
    lg: "px-8 py-3 text-lg max-w-[200px] min-h-[56px]",
    xl: "px-10 py-3 text-lg max-w-[240px] min-h-[56px]",
  };

  return sizeOptions[size] || sizeOptions["md"];
}

function getColorStyles(softGreen: boolean, variant: ButtonVariant): string {
  if (softGreen) {
    return "soft-green-bg-and-color";
  } else if (variant === "orange") {
    return "orange-bg-and-color";
  } else {
    return "green-bg-and-color";
  }
}

function getDisabledStyles(disabled: boolean): string {
  return disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "";
}

function getFullWidthStyles(fullWidth: boolean): string {
  return fullWidth ? "w-full" : "";
}

export default function ViableButton({
  title,
  href,
  size = "md",
  softGreen = false,
  variant = "green",
  disabled = false,
  icon = null,
  target = "_self",
  fullWidth = false,
  ...props
}: ViableButtonProps) {
  const baseStyles = getBaseStyles();
  const sizeStyles = getSizeStyles(size);
  const colorStyles = getColorStyles(softGreen, variant);
  const disabledStyles = getDisabledStyles(disabled);
  const fullWidthStyles = getFullWidthStyles(fullWidth);

  return (
    <Link
      href={href ?? "/"}
      target={target}
      className={`${baseStyles} ${sizeStyles} ${colorStyles} ${disabledStyles} ${fullWidthStyles} rounded-lg`}
      aria-disabled={disabled}
      {...props}
    >
      <span>{title}</span>
      {icon && (
        <span className="pl-2">
          <span aria-hidden="true">{icon}</span>
        </span>
      )}
    </Link>
  );
}

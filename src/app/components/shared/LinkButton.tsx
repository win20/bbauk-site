import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface LinkButtonProps {
  href: string;
  variant?: "filled" | "outlined" | "elevated";
  children: React.ReactNode;
  className?: string;
}

export default function LinkButton({
  href,
  variant = "filled",
  children,
  className = "",
}: LinkButtonProps) {
  const baseStyles = "rounded-md px-4 font-semibold py-2 transition-colors font-pt-sans";

  const variantStyles = {
    filled: "bg-white text-[var(--capecod)] hover:bg-gray-100",
    outlined:
      "border-2 border-white bg-transparent text-white hover:bg-white hover:text-[var(--capecod)]",
    elevated:
      "bg-white text-[var(--capecod)] hover:bg-gray-100 shadow-md border-b-4 border-gray-800/30",
  };

  const mergedClassName = twMerge(baseStyles, variantStyles[variant], className);

  return (
    <Link href={href} className={mergedClassName}>
      {children}
    </Link>
  );
}

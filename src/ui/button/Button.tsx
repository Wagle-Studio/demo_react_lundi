import "./Button.css";
import clsx from "clsx";

interface ButtonProps {
  name: string;
  variant: "primary" | "secondary";
  size?: "default" | "medium" | "large";
  disabled?: boolean;
}

export const Button = ({
  name,
  variant,
  size = "default",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={clsx("button", `button--${variant}`, `button--${size}`)}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

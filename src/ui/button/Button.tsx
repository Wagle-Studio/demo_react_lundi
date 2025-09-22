import "./Button.css";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  variant: "primary" | "secondary";
  size?: "default" | "medium";
  disabled?: boolean;
}

// Composant en charge de créer un bouton
// Info : destiné à être utilisé dans toute l'application
// Info : des props commes `variant` permettent d'adapter le style du bouton
export const Button = ({
  name,
  variant,
  size = "default",
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx("button", `button--${variant}`, `button--${size}`, {
        "button--disabled": disabled,
      })}
      disabled={disabled}
      {...props}
    >
      {name}
    </button>
  );
};

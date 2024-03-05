import { useMemo } from "react";

interface IButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  variant?: "primary" | "secondary" | "outline" | "filled" | "none";
}

export const Button = (attributes: IButtonProps) => {
  const { variant = "primary", children, className, ...rest } = attributes;

  const Render = useMemo(() => {
    let cls = className ?? "";

    switch (variant) {
      case "primary":
        cls = cls.concat(" ", `text-B1 font-semibold text-white`);
        break;
      case "filled":
        cls = cls.concat(
          " ",
          `text-B1 font-semibold bg-customRed-400 text-white p-2 rounded-lg`
        );
        break;
      case "outline":
        cls = cls.concat(
          " ",
          `text-B1 font-semibold bg-white text-customRed-400 border-customRed-400 border-2 p-2 rounded-lg`
        );
        break;
      case "none":
        break;
      default:
    }

    return (
      <button className={cls} {...rest}>
        {children}
      </button>
    );
  }, [attributes]);

  return Render;
};

import { useMemo } from "react";

export interface ITypographyProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
    React.AriaAttributes {
  variant?: "body1" | "body2" | "body3" | "header1" | "header2" | "header3";
}

export const Typography = (attributes: ITypographyProps) => {
  const { variant, children, className, ...rest } = attributes;

  const Render = useMemo(() => {
    let cls = className ?? "";

    switch (variant) {
      case "body1":
        cls = cls.concat(" ", `text-B1 font-semibold`);
        break;
      case "body2":
        cls = cls.concat(" ", `text-B2 font-semibold`);
        break;
      case "body3":
        cls = cls.concat(" ", `text-B3 font-medium`);
        break;
      case "header1":
        cls = cls.concat(" ", `text-H1 font-semibold`);
        break;
      case "header2":
        cls = cls.concat(" ", `text-H2 font-semibold`);
        break;
      case "header3":
        cls = cls.concat(" ", `text-H3 font-semibold`);
        break;
      default:
        break;
    }

    return (
      <p className={cls} {...rest}>
        {children}
      </p>
    );
  }, [attributes]);

  return Render;
};

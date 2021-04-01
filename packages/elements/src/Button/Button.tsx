/* eslint-disable react/prop-types */
import { forwardRef, HTMLProps } from "react";
import classnames from "classnames";

interface Props extends HTMLProps<HTMLButtonElement> {
  readonly type?: "submit" | "reset" | "button";
  readonly variant?: "solid" | "outline";
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, variant = "solid", type = "button", ...props }, ref) => {
    return (
      <button
        {...props}
        type={type}
        className={classnames(
          "px-4",
          "py-2",
          "rounded-md",
          "bg-gradient-to-r",
          {
            "from-green-400 to-blue-500": variant === "solid",
            "text-white": variant === "solid",
            "border-blue-500": variant === "outline",
            "text-blue-500": variant === "outline",
            "focus:border-blue-400": variant === "outline",
            "focus:text-blue-400": variant === "outline",
          },
          className
        )}
        ref={ref}
      />
    );
  }
);

if (__DEV__) {
  Button.displayName = "Button";
}

export default Button;

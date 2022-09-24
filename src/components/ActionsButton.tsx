import { IconType } from "react-icons";
import React from "react";

export default function ActionButton({
  Icon,
  size = 32,
  color = "#6e64e7",
  bg = "white",
  hover = "bg-neutral-50",
  ...props
}: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`p-2 shadow-sm rounded-lg cursor-pointer active:-translate-y-1 hover:bg-neutral-100 bg-[${bg}]`}
    >
      <Icon color={color} size={size} />
    </button>
  );
}

interface Props {
  Icon: IconType;
  size?: number;
  color?: string;
  bg?: string;
  hover?: string;
}

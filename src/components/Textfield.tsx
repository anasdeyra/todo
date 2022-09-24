import React from "react";

export default function Textfield(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      {...props}
      placeholder="Add something todo.."
      className="outline-[#6e64e7] grow py-2 px-4 rounded-lg bg-neutral-50 "
    />
  );
}

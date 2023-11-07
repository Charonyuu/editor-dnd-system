import React, {
  HTMLAttributes,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from "react";
import { twMerge } from "tailwind-merge";

type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  radioName: string;
  className?: string;
};

export default function Radio({ radioName, className, ...props }: RadioProps) {
  return (
    <label className="mr-2">
      <input type="radio" {...props} className={twMerge(className)} />
      {radioName}
    </label>
  );
}

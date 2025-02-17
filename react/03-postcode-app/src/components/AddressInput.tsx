import React from "react";
import { AddressInputProps } from "./types";
import "./styles.css";

export const AddressInput: React.FC<AddressInputProps> = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  AddressInputProps
>(
  (
    {
      label,
      id,
      value,
      placeholder,
      readOnly = false,
      isTextArea = false,
      onChange,
    },
    ref
  ) => {
    const commonProps = {
      id,
      value,
      placeholder,
      readOnly,
      onChange,
    };

    return (
      <div className="input-group">
        <label htmlFor={id}>{label}</label>
        {isTextArea ? (
          <textarea
            {...commonProps}
            ref={ref as React.Ref<HTMLTextAreaElement>}
          />
        ) : (
          <input
            type="text"
            {...commonProps}
            ref={ref as React.Ref<HTMLInputElement>}
          />
        )}
      </div>
    );
  }
);

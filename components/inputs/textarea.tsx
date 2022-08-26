import React, { useEffect, useRef } from "react";

import { useField } from "@unform/core";

import * as S from "./styles";

export function TextAreaComponent({ id, name, label, ...rest }: any) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <S.Input>
      <div className="textarea-content">
        {label && (
          <label htmlFor={id} className="paragraph-2-bold">
            {label}
          </label>
        )}

        <textarea
          id={id}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
          className="paragraph-2-regular"
        />
      </div>

      {error && (
        <span className="paragraph-3-bold error-message">{error}</span>
      )}
    </S.Input>
  );
}

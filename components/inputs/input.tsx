import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

import { useField } from "@unform/core";

const ReactInputMask = dynamic(() => import("react-input-mask"), {
  ssr: false,
});

import * as S from "./styles";

interface Props {
  id?: string;
  name: string;
  label?: string;
  type: string;
  mask?: string;
  placeholder?: string;
}

interface Props {
  name: string;
  label?: string;
}

type InputProps = JSX.IntrinsicElements["input"] & Props;

export function InputComponent({
  id,
  name,
  type,
  mask,
  label,
  ...rest
}: InputProps) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current || value,
      path: "value",
    });
  }, [fieldName, value, registerField]);

  return (
    <S.Input>
      <div className="input-content">
        {mask ? (
          <ReactInputMask
            mask={mask}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
          >
            {() => (
              <input
                className="paragraph-2-regular"
                id={id}
                defaultValue={defaultValue}
                ref={inputRef}
                type={type}
                name={name}
                {...rest}
              />
            )}
          </ReactInputMask>
        ) : (
          <>
            {label && <label className="label-text paragraph-2-bold" htmlFor={id}>{label}</label>}

            <input
              id={id}
              defaultValue={defaultValue}
              ref={inputRef}
              name={name}
              type={type}
              {...rest}
              className="paragraph-2-regular"
            />
          </>
        )}
      </div>

      {error && (
        <span className="error paragraph-2-bold error-message">
          {error}
        </span>
      )}
    </S.Input>
  );
}

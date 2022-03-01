import React from "react";

import { Container } from "./styles";

export const Input = ({
  textLabel,
  inputType,
  identify,
  placeholder,
  handleOnChange,
  value,
  isSelect,
}) => {
  return (
    <Container>
      <label htmlFor={identify}>{textLabel}</label>
      {!isSelect ? (
        <input
          type={inputType}
          name={identify}
          id={identify}
          placeholder={placeholder}
          onChange={handleOnChange}
          value={value}
          isSelect={isSelect}
        />
      ) : (
        <select name={identify} id={identify}>
            <option value={value} disabled selected>Selecione uma opção</option>
            <option value={value}>Infra</option>
            <option value={value}>Desenvolvimento</option>
            <option value={value}>Design</option>
            <option value={value}>Planejamento</option>
        </select>
      )}
    </Container>
  );
};
